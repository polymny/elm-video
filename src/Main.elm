port module Main exposing (..)

import Browser
import Browser.Events
import DOM as Dom
import Element exposing (Element)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html
import Html.Attributes
import Html.Events
import Icons
import Json.Decode as Decode
import Quality
import Simple.Animation as Animation exposing (Animation)
import Simple.Animation.Animated as Animated
import Simple.Animation.Property as P


main : Program Decode.Value Model Msg
main =
    Browser.application
        { init = \url _ _ -> init url
        , update = update
        , view = view
        , subscriptions =
            \_ ->
                Sub.batch
                    [ nowHasQualities NowHasQualities
                    , nowHasQuality
                        (\x ->
                            case Decode.decodeValue Quality.decode x of
                                Ok s ->
                                    NowHasQuality s

                                _ ->
                                    Noop
                        )
                    , Browser.Events.onAnimationFrameDelta AnimationFrameDelta
                    , Browser.Events.onResize (\x y -> NowHasWindowSize ( x, y ))
                    ]
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
    , isFullscreen : Bool
    , quality : Maybe Quality.Quality
    , qualities : List Int
    , showBar : Bool
    , animationFrame : Float
    , videoSize : ( Int, Int )
    , screenSize : ( Int, Int )
    , playbackRate : Float
    , settings : Settings
    , showSettings : Bool
    }


type Settings
    = All
    | Speed
    | Quality


type Msg
    = Noop
    | PlayPause
    | Seek Float
    | ToggleSettings
    | SetSettings Settings
    | SetPlaybackRate Float
    | SetQuality Quality.Quality
    | RequestFullscreen
    | ExitFullscreen
    | AnimationFrameDelta Float
    | MouseMove
    | NowPlaying
    | NowPaused
    | NowHasDuration Float
    | NowAtPosition Float
    | NowAtVolume Float Bool
    | NowLoaded (List ( Float, Float ))
    | NowIsFullscreen Bool
    | NowHasQualities (List Int)
    | NowHasQuality Quality.Quality
    | NowHasVideoSize ( Int, Int )
    | NowHasWindowSize ( Int, Int )
    | NowHasPlaybackRate Float


init : Decode.Value -> ( Model, Cmd Msg )
init flags =
    let
        url =
            Decode.decodeValue (Decode.field "url" Decode.string) flags
                |> Result.withDefault "manifest.m3u8"

        width =
            Decode.decodeValue (Decode.field "width" Decode.int) flags
                |> Result.withDefault 0

        height =
            Decode.decodeValue (Decode.field "height" Decode.int) flags
                |> Result.withDefault 0
    in
    ( Model
        url
        False
        0.0
        1.0
        []
        1.0
        False
        False
        Nothing
        []
        True
        0
        ( 0, 0 )
        ( width, height )
        1.0
        All
        False
    , initVideo url
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Noop ->
            ( model, Cmd.none )

        PlayPause ->
            ( model, playPause () )

        Seek ratio ->
            ( model, seek (ratio * model.duration) )

        SetPlaybackRate rate ->
            ( { model | showSettings = False, settings = All }, setPlaybackRate rate )

        ToggleSettings ->
            ( { model | showSettings = not model.showSettings }, Cmd.none )

        SetSettings s ->
            ( { model | settings = s }, Cmd.none )

        RequestFullscreen ->
            ( model, requestFullscreen () )

        ExitFullscreen ->
            ( model, exitFullscreen () )

        SetQuality q ->
            ( { model | showSettings = False, settings = All }, setQuality q )

        AnimationFrameDelta delta ->
            if model.animationFrame + delta > 3500 then
                ( { model | animationFrame = model.animationFrame + delta, showSettings = False, settings = All }, Cmd.none )

            else
                ( { model | animationFrame = model.animationFrame + delta }, Cmd.none )

        MouseMove ->
            ( { model | animationFrame = 0 }, Cmd.none )

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

        NowIsFullscreen fullscreen ->
            ( { model | isFullscreen = fullscreen }, Cmd.none )

        NowHasQualities qualities ->
            ( { model | qualities = qualities }, Cmd.none )

        NowHasQuality quality ->
            ( { model | quality = Just quality }, Cmd.none )

        NowHasVideoSize size ->
            ( { model | videoSize = size }, Cmd.none )

        NowHasWindowSize size ->
            ( { model | screenSize = size }, Cmd.none )

        NowHasPlaybackRate rate ->
            ( { model | playbackRate = rate }, Cmd.none )


view : Model -> Browser.Document Msg
view model =
    { title = "Hello"
    , body = [ Element.layout [ Element.height Element.fill ] (video model) ]
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
            animatedEl
                (if model.animationFrame < 3000 then
                    fadeIn

                 else
                    fadeOut
                )
                [ Element.width Element.fill, Element.height Element.fill ]
                (Element.column
                    [ Element.width Element.fill
                    , Element.alignBottom
                    , Font.color (Element.rgba 1 1 1 0.85)
                    ]
                    [ settings model
                    , Element.column
                        [ Element.width Element.fill
                        , Element.padding 10
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
                            [ Element.spacing 10, Element.width Element.fill ]
                            [ playPauseButton model.playing
                            , Element.el [ Element.moveDown 2.5 ] (Element.text (formatTime model.position ++ " / " ++ formatTime model.duration))
                            , Element.row [ Element.spacing 10, Element.alignRight ]
                                [ settingsButton, fullscreenButton model.isFullscreen ]
                            ]
                        ]
                    ]
                )

        videoAspectRatio =
            toFloat (Tuple.first model.videoSize) / toFloat (Tuple.second model.videoSize)

        screenAspectRatio =
            toFloat (Tuple.first model.screenSize) / toFloat (Tuple.second model.screenSize)

        ( ( x, y ), ( w, h ) ) =
            if videoAspectRatio > screenAspectRatio then
                let
                    videoHeight =
                        Tuple.first model.screenSize * Tuple.second model.videoSize // Tuple.first model.videoSize
                in
                ( ( 0, (Tuple.second model.screenSize - videoHeight) // 2 )
                , ( Tuple.first model.screenSize, videoHeight )
                )

            else
                let
                    videoWidth =
                        Tuple.second model.screenSize * Tuple.first model.videoSize // Tuple.second model.videoSize
                in
                ( ( (Tuple.first model.screenSize - videoWidth) // 2, 0 )
                , ( videoWidth, Tuple.second model.screenSize )
                )
    in
    Element.el
        (Element.inFront bar
            :: Element.width Element.fill
            :: Element.height Element.fill
            :: Background.color (Element.rgb 0 0 0)
            :: Element.htmlAttribute (Html.Attributes.id "full")
            :: playerEvents
        )
        (Element.html
            (Html.video
                (Html.Attributes.style "position" "absolute"
                    :: Html.Attributes.width w
                    :: Html.Attributes.height h
                    :: Html.Attributes.style "top" (String.fromInt y ++ "px")
                    :: Html.Attributes.style "left" (String.fromInt x ++ "px")
                    :: videoEvents
                )
                []
            )
        )


settings : Model -> Element Msg
settings model =
    let
        makeMenuButton : Settings -> Element Msg -> Element Msg -> Element Msg
        makeMenuButton s key value =
            Input.button [ Element.width Element.fill, Element.paddingXY 0 10 ]
                { label =
                    Element.row [ Element.width Element.fill, Element.spacing 20 ]
                        [ Element.el [ Font.bold, Element.alignLeft ] key
                        , Element.el [ Element.alignRight ] value
                        ]
                , onPress = Just (SetSettings s)
                }

        speedButton =
            makeMenuButton Speed (Element.text "Speed") (Element.text ("x" ++ String.fromFloat model.playbackRate))

        qualityButton =
            case model.quality of
                Just q ->
                    makeMenuButton Quality (Element.text "Quality") (Element.text (Quality.toString q))

                _ ->
                    Element.none

        returnButton =
            Input.button
                [ Element.width Element.fill
                , Element.paddingXY 0 10
                , Border.widthEach
                    { bottom = 1
                    , top = 0
                    , left = 0
                    , right = 0
                    }
                , Border.color (Element.rgba 0.5 0.5 0.5 0.75)
                ]
                { label = Element.text "Return"
                , onPress = Just (SetSettings All)
                }

        speedOptions =
            [ 0.5, 0.75, 1, 1.5, 2 ]
                |> List.map
                    (\x ->
                        Input.button [ Element.width Element.fill, Element.paddingXY 0 10 ]
                            { label =
                                Element.row [ Element.width Element.fill ]
                                    [ if x == model.playbackRate then
                                        Icons.check False

                                      else
                                        Element.el [ Font.color (Element.rgba 0 0 0 0) ] (Icons.check False)
                                    , Element.el
                                        [ Element.paddingEach
                                            { left = 10
                                            , right = 0
                                            , top = 0
                                            , bottom = 0
                                            }
                                        ]
                                        (Element.text ("x" ++ String.fromFloat x))
                                    ]
                            , onPress = Just (SetPlaybackRate x)
                            }
                    )
                |> (\x -> returnButton :: x)

        qualityOptions =
            model.qualities
                |> List.map
                    (\x ->
                        Input.button [ Element.width Element.fill, Element.paddingXY 0 10 ]
                            { label =
                                Element.row [ Element.width Element.fill ]
                                    [ if Quality.isSameOption (Just { auto = False, height = x }) model.quality then
                                        Icons.check False

                                      else
                                        Element.el [ Font.color (Element.rgba 0 0 0 0) ] (Icons.check False)
                                    , Element.el
                                        [ Element.paddingEach
                                            { left = 10
                                            , right = 0
                                            , top = 0
                                            , bottom = 0
                                            }
                                        ]
                                        (Element.text (Quality.toString { auto = False, height = x }))
                                    ]
                            , onPress = Just (SetQuality { auto = x == 0, height = x })
                            }
                    )
                |> (\x -> returnButton :: x)

        buttons =
            case model.settings of
                All ->
                    [ speedButton, qualityButton ]

                Speed ->
                    speedOptions

                Quality ->
                    qualityOptions
    in
    animatedEl
        (if model.showSettings then
            fadeIn

         else
            fadeOut
        )
        [ Element.padding 10
        , Element.width Element.fill
        , Element.height Element.fill
        , Element.moveDown 20
        ]
        (Element.column
            [ Background.color (Element.rgba 0.2 0.2 0.2 0.75)
            , Element.alignRight
            , Element.paddingXY 20 10
            , Border.rounded 10
            ]
            buttons
        )


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


fullscreenButton : Bool -> Element Msg
fullscreenButton isFullscreen =
    Input.button []
        (if isFullscreen then
            { label = Icons.minimize False
            , onPress = Just ExitFullscreen
            }

         else
            { label = Icons.maximize False
            , onPress = Just RequestFullscreen
            }
        )


settingsButton : Element Msg
settingsButton =
    Input.button []
        { label = Icons.settings False
        , onPress = Just ToggleSettings
        }


playerEvents : List (Element.Attribute Msg)
playerEvents =
    List.map Element.htmlAttribute
        [ Html.Events.on "fullscreenchange" decodeFullscreenChange
        , Html.Events.on "mousemove" (Decode.succeed MouseMove)
        ]


videoEvents : List (Html.Attribute Msg)
videoEvents =
    [ Html.Attributes.id "video"
    , Html.Events.on "playing" (Decode.succeed NowPlaying)
    , Html.Events.on "pause" (Decode.succeed NowPaused)
    , Html.Events.on "durationchange" decodeDurationChanged
    , Html.Events.on "timeupdate" decodePosition
    , Html.Events.on "volumechange" decodeVolumeChange
    , Html.Events.on "progress" decodeProgress
    , Html.Events.on "resize" decodeVideoResize
    , Html.Events.on "ratechange" decodePlaybackRateChange
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
    decodeTimeRanges
        |> Decode.field "asArray"
        |> Decode.field "buffered"
        |> Dom.target
        |> Decode.map NowLoaded


decodeTimeRanges : Decode.Decoder (List ( Float, Float ))
decodeTimeRanges =
    Decode.list decodeTimeRange


decodeTimeRange : Decode.Decoder ( Float, Float )
decodeTimeRange =
    Decode.map2 Tuple.pair
        (Decode.field "start" Decode.float)
        (Decode.field "end" Decode.float)


decodeFullscreenChange : Decode.Decoder Msg
decodeFullscreenChange =
    Decode.value
        |> Decode.nullable
        |> Decode.field "fullscreenElement"
        |> Decode.field "document"
        |> Dom.target
        |> Decode.map (\x -> NowIsFullscreen (x /= Nothing))


decodeVideoResize : Decode.Decoder Msg
decodeVideoResize =
    Dom.target <|
        Decode.map2 (\x y -> NowHasVideoSize ( x, y ))
            (Decode.field "videoWidth" Decode.int)
            (Decode.field "videoHeight" Decode.int)


decodePlaybackRateChange : Decode.Decoder Msg
decodePlaybackRateChange =
    Dom.target <|
        Decode.map NowHasPlaybackRate
            (Decode.field "playbackRate" Decode.float)


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


port initVideo : String -> Cmd msg


port playPause : () -> Cmd msg


port seek : Float -> Cmd msg


port requestFullscreen : () -> Cmd msg


port exitFullscreen : () -> Cmd msg


port setPlaybackRate : Float -> Cmd msg


port setQuality : Quality.Quality -> Cmd msg


port nowHasQualities : (List Int -> msg) -> Sub msg


port nowHasQuality : (Decode.Value -> msg) -> Sub msg


fadeIn : Animation
fadeIn =
    Animation.fromTo
        { duration = 500
        , options = []
        }
        [ P.opacity 0 ]
        [ P.opacity 1 ]


fadeOut : Animation
fadeOut =
    Animation.fromTo
        { duration = 500
        , options = []
        }
        [ P.opacity 1 ]
        [ P.opacity 0 ]


animatedEl : Animation -> List (Element.Attribute msg) -> Element msg -> Element msg
animatedEl =
    animatedUi Element.el


animatedUi =
    Animated.ui
        { behindContent = Element.behindContent
        , htmlAttribute = Element.htmlAttribute
        , html = Element.html
        }
