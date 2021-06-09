port module Main exposing (..)

import Browser
import DOM as Dom
import Element exposing (Element, alignRight, centerY, el, fill, padding, rgb255, row, spacing, text, width)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html
import Html.Attributes
import Html.Events
import Icons
import Json.Decode as Decode


main : Program Decode.Value Model Msg
main =
    Browser.application
        { init = \_ _ _ -> init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        , onUrlChange = \_ -> Noop
        , onUrlRequest = \_ -> Noop
        }


type alias Model =
    { url : String
    , playing : Bool
    , position : Float
    , duration : Float
    , loaded : List ( Float, Float )
    , volume : Float
    , muted : Bool
    }


type Msg
    = Noop
    | PlayPause
    | Seek Float
    | NowPlaying
    | NowPaused
    | NowHasDuration Float
    | NowAtPosition Float
    | NowAtVolume Float Bool
    | NowLoaded (List ( Float, Float ))


init : ( Model, Cmd Msg )
init =
    ( Model "video/manifest.m3u8" False 0.0 1.0 [] 1.0 False, initVideo () )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Noop ->
            ( model, Cmd.none )

        PlayPause ->
            ( model, playPause () )

        Seek ratio ->
            ( model, seek (ratio * model.duration) )

        NowPlaying ->
            ( { model | playing = True }, Cmd.none )

        NowPaused ->
            ( { model | playing = False }, Cmd.none )

        NowHasDuration duration ->
            ( { model | duration = duration }, Cmd.none )

        NowAtPosition position ->
            ( { model | position = position }, Cmd.none )

        NowAtVolume volume muted ->
            ( { model | volume = volume, muted = muted }, Cmd.none )

        NowLoaded loaded ->
            ( { model | loaded = loaded }, Cmd.none )


view : Model -> Browser.Document Msg
view model =
    { title = "Hello"
    , body = [ Element.layout [] (video model) ]
    }


video : Model -> Element Msg
video model =
    let
        seen =
            round (model.position * 1000)

        loaded =
            List.filter (\( start, end ) -> start < model.position) model.loaded

        loadedToShow =
            every model.duration loaded

        showRange : ( Float, Float, Bool ) -> Element msg
        showRange ( start, end, isLoaded ) =
            let
                portion =
                    round (1000 * (end - start))
            in
            Element.el
                [ Element.width (Element.fillPortion portion)
                , Element.height Element.fill
                , if isLoaded then
                    Background.color (Element.rgba 1 1 1 0.5)

                  else
                    Background.color (Element.rgba 1 1 1 0)
                ]
                Element.none

        loadedElement =
            Element.row
                [ Element.width Element.fill
                , Element.height (Element.px 5)
                , Element.centerY
                , Border.rounded 5
                ]
                (List.map showRange loadedToShow)

        remaining =
            round ((model.duration - model.position) * 1000)

        bar =
            Element.column
                [ Element.width Element.fill
                , Element.padding 10
                , Element.alignBottom
                , Font.color (Element.rgba 1 1 1 0.85)
                , Background.gradient { angle = 0, steps = [ Element.rgba 0 0 0 0.75, Element.rgba 0 0 0 0 ] }
                ]
                [ Element.row
                    [ Element.width Element.fill
                    , Element.height (Element.px 30)
                    , Border.rounded 5
                    , Element.behindContent
                        (Element.el
                            [ Background.color (Element.rgba 1 1 1 0.25)
                            , Element.width Element.fill
                            , Element.height (Element.px 5)
                            , Element.centerY
                            , Border.rounded 5
                            ]
                            Element.none
                        )
                    , Element.behindContent loadedElement
                    , Element.inFront
                        (Element.el
                            (Element.width Element.fill
                                :: Element.height Element.fill
                                :: Element.pointer
                                :: seekBarEvents
                            )
                            Element.none
                        )
                    ]
                    [ Element.el
                        [ Background.color (Element.rgba 1 0 0 0.75)
                        , Element.width (Element.fillPortion seen)
                        , Element.height Element.fill
                        , Border.roundEach { topLeft = 5, topRight = 0, bottomLeft = 5, bottomRight = 0 }
                        , Element.height (Element.px 5)
                        , Element.centerY
                        ]
                        Element.none
                    , Element.el [ Element.width (Element.fillPortion remaining) ] Element.none
                    ]
                , Element.row
                    [ Element.spacing 10 ]
                    [ playPauseButton model.playing
                    , Element.el [ Element.moveDown 2.5 ] (Element.text (formatTime model.position ++ " / " ++ formatTime model.duration))
                    ]
                ]
    in
    Element.el [ Element.inFront bar, Element.width (Element.px 1000) ]
        (Element.html (Html.video videoEvents []))


playPauseButton : Bool -> Element Msg
playPauseButton playing =
    let
        icon =
            if playing then
                Icons.pause True

            else
                Icons.play True
    in
    Input.button []
        { label = icon
        , onPress = Just PlayPause
        }


videoEvents : List (Html.Attribute Msg)
videoEvents =
    [ Html.Attributes.id "video"
    , Html.Events.on "playing" (Decode.succeed NowPlaying)
    , Html.Events.on "pause" (Decode.succeed NowPaused)
    , Html.Events.on "durationchange" decodeDurationChanged
    , Html.Events.on "timeupdate" decodePosition
    , Html.Events.on "volumechange" decodeVolumeChange
    , Html.Events.on "progress" decodeProgress
    ]


seekBarEvents : List (Element.Attribute Msg)
seekBarEvents =
    List.map Element.htmlAttribute
        [ Html.Events.on "click" decodeSeek
        ]


decodeDurationChanged : Decode.Decoder Msg
decodeDurationChanged =
    Dom.target <|
        Decode.map NowHasDuration
            (Decode.field "duration" Decode.float)


decodePosition : Decode.Decoder Msg
decodePosition =
    Dom.target <|
        Decode.map NowAtPosition
            (Decode.field "currentTime" Decode.float)


decodeVolumeChange : Decode.Decoder Msg
decodeVolumeChange =
    Dom.target <|
        Decode.map2 NowAtVolume
            (Decode.field "volume" Decode.float)
            (Decode.field "muted" Decode.bool)


decodeSeek : Decode.Decoder Msg
decodeSeek =
    Decode.map2 (\x y -> Seek (toFloat x / toFloat y))
        (Decode.field "layerX" Decode.int)
        (Dom.target <| Decode.field "offsetWidth" Decode.int)


decodeProgress : Decode.Decoder Msg
decodeProgress =
    Decode.map NowLoaded
        (Dom.target <|
            Decode.field "buffered" <|
                Decode.field "asArray" <|
                    decodeTimeRanges
        )


decodeTimeRanges : Decode.Decoder (List ( Float, Float ))
decodeTimeRanges =
    Decode.list decodeTimeRange


decodeTimeRange : Decode.Decoder ( Float, Float )
decodeTimeRange =
    Decode.map2 (\x y -> ( x, y ))
        (Decode.field "start" Decode.float)
        (Decode.field "end" Decode.float)


every : Float -> List ( Float, Float ) -> List ( Float, Float, Bool )
every duration input =
    everyAux duration 0.0 [] input |> List.reverse |> List.filter (\( x, y, _ ) -> x /= y)


everyAux : Float -> Float -> List ( Float, Float, Bool ) -> List ( Float, Float ) -> List ( Float, Float, Bool )
everyAux duration currentTime currentState input =
    case input of
        [] ->
            ( currentTime, duration, False ) :: currentState

        [ ( start, end ) ] ->
            ( end, duration, False ) :: ( start, end, True ) :: ( currentTime, start, False ) :: currentState

        ( start, end ) :: t ->
            everyAux duration end (( start, end, True ) :: ( currentTime, start, False ) :: currentState) t


formatTime : Float -> String
formatTime s =
    let
        seconds =
            round s

        minutes =
            seconds // 60 |> modBy 60

        hours =
            seconds // 3600

        secs =
            modBy 60 seconds

        secsString =
            if secs < 10 then
                "0" ++ String.fromInt secs

            else
                String.fromInt secs

        minutesString =
            if minutes < 10 && hours > 0 then
                "0" ++ String.fromInt minutes

            else
                String.fromInt minutes

        hoursString =
            if hours == 0 then
                ""

            else
                String.fromInt hours ++ ":"
    in
    hoursString ++ minutesString ++ ":" ++ secsString


port initVideo : () -> Cmd msg


port playPause : () -> Cmd msg


port seek : Float -> Cmd msg
