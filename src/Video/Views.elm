module Video.Views exposing (..)

import Element exposing (Element)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html
import Html.Attributes
import Material.Icons
import Material.Icons.Types exposing (Icon)
import Simple.Animation as Animation exposing (Animation)
import Simple.Animation.Animated as Animated
import Simple.Animation.Property as P
import Video exposing (Video)
import Video.Events as Events
import Video.Icons as Icons
import Video.Quality as Quality


view : Video -> Element Video.Msg
view model =
    Element.el
        (Element.inFront (overlay model)
            :: Element.width Element.fill
            :: Element.inFront (menu model)
            :: Background.color (Element.rgb 0 0 0)
            :: Element.htmlAttribute (Html.Attributes.id (model.id ++ "-full"))
            :: Events.player
        )
        (Element.html (Html.video (Html.Attributes.class "wf" :: Events.video model) []))


embed : Video -> Element Video.Msg
embed model =
    if model.isFullscreen then
        fullpage model

    else
        Element.el
            (Element.inFront (overlay model)
                :: Element.inFront (menu model)
                :: Element.width Element.fill
                :: Background.color (Element.rgb 0 0 0)
                :: Element.htmlAttribute (Html.Attributes.id (model.id ++ "-full"))
                :: Events.player
            )
            (Element.html (Html.video (Html.Attributes.class "wf" :: Events.video model) []))


fullpage : Video -> Element Video.Msg
fullpage model =
    let
        videoAspectRatio =
            toFloat (Tuple.first model.size) / toFloat (Tuple.second model.size)

        screenAspectRatio =
            toFloat (Tuple.first model.screenSize) / toFloat (Tuple.second model.screenSize)

        ( ( x, y ), ( w, h ) ) =
            if videoAspectRatio > screenAspectRatio then
                let
                    videoHeight =
                        Tuple.first model.screenSize * Tuple.second model.size // Tuple.first model.size
                in
                ( ( 0, (Tuple.second model.screenSize - videoHeight) // 2 )
                , ( Tuple.first model.screenSize, videoHeight )
                )

            else
                let
                    videoWidth =
                        Tuple.second model.screenSize * Tuple.first model.size // Tuple.second model.size
                in
                ( ( (Tuple.first model.screenSize - videoWidth) // 2, 0 )
                , ( videoWidth, Tuple.second model.screenSize )
                )
    in
    Element.el
        (Element.inFront (overlay model)
            :: Element.inFront (menu model)
            :: Element.width Element.fill
            :: Element.height Element.fill
            :: Background.color (Element.rgb 0 0 0)
            :: Element.htmlAttribute (Html.Attributes.id (model.id ++ "-full"))
            :: Events.player
        )
        (Element.html
            (Html.video
                (Html.Attributes.style "position" "absolute"
                    :: Html.Attributes.width w
                    :: Html.Attributes.height h
                    :: Html.Attributes.style "top" (String.fromInt y ++ "px")
                    :: Html.Attributes.style "left" (String.fromInt x ++ "px")
                    :: Events.video model
                )
                []
            )
        )


menu : Video -> Element msg
menu model =
    Element.none


overlay : Video -> Element Video.Msg
overlay model =
    Element.column
        [ Element.width Element.fill
        , Element.height Element.fill
        , Font.color (Element.rgb 1 1 1)
        , Font.size ((model.playerSize |> Tuple.second) // round (1.5 * toFloat scale))
        ]
        (if not model.ready then
            [ Element.el [ Element.scale 5, Element.centerX, Element.centerY ] (animatedEl rotate [] (icon model Icons.spinner)) ]

         else
            [ Element.el (Element.width Element.fill :: Element.height Element.fill :: Events.overlay model) Element.none
            , Element.row [ Element.width Element.fill ]
                [ Element.el (Element.width Element.fill :: Element.height Element.fill :: Events.overlay model) Element.none
                , settings model
                ]
            , controls model
            ]
        )


settings : Video -> Element Video.Msg
settings model =
    case model.settings of
        Nothing ->
            Element.none

        Just a ->
            let
                ( title, element, size ) =
                    case a of
                        Video.Speed ->
                            let
                                playbackRateButton x =
                                    Input.button
                                        (if x == model.playbackRate then
                                            [ Element.width Element.fill, Font.bold ]

                                         else
                                            [ Element.width Element.fill ]
                                        )
                                        { label =
                                            Element.column [ Element.width Element.fill ]
                                                [ icon model
                                                    (if x == model.playbackRate then
                                                        Material.Icons.radio_button_checked

                                                     else
                                                        Material.Icons.radio_button_unchecked
                                                    )
                                                    |> Element.el [ Element.centerX ]
                                                , Element.el [ Element.centerX ] (Element.text (String.fromFloat x ++ "x"))
                                                ]
                                        , onPress = Just (Video.SetPlaybackRate x)
                                        }

                                options =
                                    [ 0.25, 0.5, 0.75, 1, 1.25, 1.5, 2 ]
                                        |> List.map playbackRateButton
                                        |> Element.row [ Element.width Element.fill ]
                            in
                            ( "Playback rate", options, Element.width Element.fill )

                        Video.Quality ->
                            let
                                qualityOption x =
                                    Input.button []
                                        { label =
                                            Element.row []
                                                [ if Quality.isSameOption (Just { auto = False, height = x }) model.quality then
                                                    Element.el [] (icon model Material.Icons.check)

                                                  else
                                                    Element.el [ Font.color (Element.rgba 0 0 0 0) ] (icon model Material.Icons.check)
                                                , Element.text (Quality.toString { auto = False, height = x })
                                                ]
                                        , onPress = Just (Video.SetQuality { auto = x == 0, height = x })
                                        }

                                options =
                                    model.qualities
                                        |> List.map qualityOption
                                        |> Element.column []
                            in
                            ( "Quality", options, Element.alignRight )

                        _ ->
                            ( "Nothing", Element.text (Debug.toString model.settings), Element.alignRight )
            in
            fadeElement 3000
                3500
                model.animationFrame
                [ Element.padding 20, size ]
                (Element.column
                    [ Element.width Element.fill
                    , Element.padding 20
                    , Border.rounded 10
                    , Border.width 1
                    , Border.color (Element.rgba 0.75 0.75 0.75 0.75)
                    , Background.color (Element.rgba 0 0 0 0.75)
                    ]
                    [ Element.el [ Font.bold ] (Element.text title), element ]
                )


controls : Video -> Element Video.Msg
controls model =
    fadeElement
        3000
        3500
        model.animationFrame
        [ Element.width Element.fill
        , Element.padding 10
        , Background.gradient { angle = 0, steps = [ Element.rgba 0 0 0 0.75, Element.rgba 0 0 0 0 ] }
        ]
        (Element.column [ Element.width Element.fill ] [ seekbar model, buttonBar model ])


buttonBar : Video -> Element Video.Msg
buttonBar model =
    Element.row [ Element.width Element.fill ]
        [ Element.row [ Element.alignLeft, Element.spacing 10 ]
            [ playPauseButton model
            , volumeButton model
            , Element.el [ Element.moveDown 2.5, Element.centerY ] (Element.text (formatTime model.position ++ " / " ++ formatTime model.duration))
            ]
        , Element.row [ Element.alignRight, Element.spacing 10 ]
            [ subtitlesButton model
            , speedButton model
            , qualityButton model
            , fullscreenButton model
            ]
        ]


seekbar : Video -> Element Video.Msg
seekbar model =
    let
        seen =
            round (model.position * 1000)

        loaded =
            List.filter (\( start, _ ) -> start < model.position) model.loaded

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
    in
    Element.row
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
                    :: Events.seekBar model
                )
                Element.none
            )
        , Element.above (miniature model)
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


miniature : Video -> Element Video.Msg
miniature model =
    case ( model.mobile, model.showMiniature ) of
        ( False, Just ( position, size ) ) ->
            let
                relativePosition =
                    toFloat position / toFloat size

                miniatureId =
                    round (relativePosition * 100)

                miniatureIdString =
                    "miniature-" ++ String.padLeft 3 '0' (String.fromInt miniatureId) ++ ".png"

                miniatureUrl =
                    model.url
                        |> String.split "/"
                        |> List.reverse
                        |> List.drop 1
                        |> (\list -> miniatureIdString :: list)
                        |> List.reverse
                        |> String.join "/"

                width =
                    toFloat (Tuple.first model.playerSize) / 5 |> round

                border =
                    2

                rightPosition =
                    (position - (width + border) // 2)
                        |> max 0
                        |> min (size - width)
                        |> toFloat
            in
            Element.column
                [ Element.moveRight rightPosition
                , Element.spacing 10
                , Element.width Element.shrink
                ]
                [ Html.img
                    [ Html.Attributes.style "border-style" "solid"
                    , Html.Attributes.style "border-width" "2px"
                    , Html.Attributes.style "border-color" "white"
                    , Html.Attributes.style "width" (String.fromInt width ++ "px")
                    , Html.Attributes.src miniatureUrl
                    ]
                    []
                    |> Element.html
                    |> Element.el []
                , Element.el
                    [ Element.centerX
                    , Font.shadow
                        { offset = ( 0, 0 )
                        , blur = 4
                        , color = Element.rgb 0 0 0
                        }
                    ]
                    (Element.text (formatTime (relativePosition * model.duration)))
                ]

        _ ->
            Element.none


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
        [ P.opacity 0, P.property "display" "none" ]


fadeOutZoom : Animation
fadeOutZoom =
    Animation.fromTo
        { duration = 500
        , options = []
        }
        [ P.opacity 1, P.scale 1 ]
        [ P.opacity 0, P.scale 5 ]


rotate : Animation
rotate =
    Animation.fromTo
        { duration = 1000, options = [ Animation.loop, Animation.linear ] }
        [ P.rotate 0 ]
        [ P.rotate 360 ]


animatedEl : Animation -> List (Element.Attribute msg) -> Element msg -> Element msg
animatedEl =
    animatedUi Element.el


animatedUi :
    (List (Element.Attribute msg) -> children -> Element msg)
    -> Animation
    -> List (Element.Attribute msg)
    -> children
    -> Element msg
animatedUi =
    Animated.ui
        { behindContent = Element.behindContent
        , htmlAttribute = Element.htmlAttribute
        , html = Element.html
        }


hideCursor : Element.Attribute msg
hideCursor =
    Element.htmlAttribute (Html.Attributes.style "cursor" "none")


fadeElement : Float -> Float -> Float -> List (Element.Attribute msg) -> Element msg -> Element msg
fadeElement start end current attr el =
    if current > end then
        Element.none

    else
        animatedEl
            (if current > start then
                fadeOut

             else
                fadeIn
            )
            attr
            el


playPauseButton : Video -> Element Video.Msg
playPauseButton model =
    let
        i =
            if model.playing then
                icon model Material.Icons.pause

            else
                icon model Material.Icons.play_arrow
    in
    Input.button []
        { label = i
        , onPress = Just Video.PlayPause
        }


volumeButton : Video -> Element Video.Msg
volumeButton model =
    let
        i =
            if model.muted then
                icon model Material.Icons.volume_off

            else if model.volume < 0.5 then
                icon model Material.Icons.volume_down

            else
                icon model Material.Icons.volume_up
    in
    Input.button []
        { label = i
        , onPress = Just (Video.SetVolume model.volume (not model.muted))
        }


fullscreenButton : Video -> Element Video.Msg
fullscreenButton model =
    Input.button []
        (if model.isFullscreen then
            { label = icon model Material.Icons.fullscreen_exit
            , onPress = Just Video.ExitFullscreen
            }

         else
            { label = icon model Material.Icons.fullscreen
            , onPress = Just Video.RequestFullscreen
            }
        )


speedButton : Video -> Element Video.Msg
speedButton model =
    Input.button []
        { label = icon model Material.Icons.speed
        , onPress = Just (Video.ToggleSettings Video.Speed)
        }


subtitlesButton : Video -> Element Video.Msg
subtitlesButton model =
    Input.button []
        { label = icon model Material.Icons.subtitles
        , onPress = Just (Video.ToggleSettings Video.Subtitles)
        }


qualityButton : Video -> Element Video.Msg
qualityButton model =
    Input.button []
        { label = icon model Material.Icons.settings
        , onPress = Just (Video.ToggleSettings Video.Quality)
        }


icon : Video -> Icon msg -> Element msg
icon model i =
    Element.el [ Element.padding ((model.playerSize |> Tuple.second) // (scale * 4)) ]
        (Icons.icon ((model.playerSize |> Tuple.second) // scale) i)


scale : Int
scale =
    15
