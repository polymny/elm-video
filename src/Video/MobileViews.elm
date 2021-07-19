module Video.MobileViews exposing (..)

import Element exposing (Element)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html
import Html.Attributes
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
            :: Element.height Element.fill
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
                :: Element.height Element.fill
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


settings : Video -> Element Video.Msg
settings model =
    let
        makeMenuButton : Video.Settings -> Element Video.Msg -> Element Video.Msg -> Element Video.Msg
        makeMenuButton s key value =
            Input.button [ Element.width Element.fill, Element.paddingXY 0 10 ]
                { label =
                    Element.row [ Element.width Element.fill, Element.spacing 20 ]
                        [ Element.el [ Font.bold, Element.alignLeft ] key
                        , Element.el [ Element.alignRight ] value
                        ]
                , onPress = Just (Video.SetSettings s)
                }

        speedButton =
            makeMenuButton Video.Speed (Element.text "Speed") (Element.text ("x" ++ String.fromFloat model.playbackRate))

        qualityButton =
            case model.quality of
                Just q ->
                    makeMenuButton Video.Quality (Element.text "Quality") (Element.text (Quality.toString q))

                _ ->
                    Element.none

        subtitlesButton =
            case ( model.subtitleTrack, model.subtitles ) of
                ( Just t, _ :: _ ) ->
                    makeMenuButton Video.Subtitles (Element.text "Subtitles") (Element.text t.name)

                ( _, _ :: _ ) ->
                    makeMenuButton Video.Subtitles (Element.text "Subtitles") (Element.text "Disabled")

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
                , onPress = Just (Video.SetSettings Video.All)
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
                            , onPress = Just (Video.SetPlaybackRate x)
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
                            , onPress = Just (Video.SetQuality { auto = x == 0, height = x })
                            }
                    )
                |> (\x -> returnButton :: x)

        subtitleOptions =
            model.subtitles
                |> List.indexedMap (\i x -> ( i, Just x ))
                |> (\x -> ( -1, Nothing ) :: x)
                |> List.map
                    (\( i, x ) ->
                        Input.button [ Element.width Element.fill, Element.paddingXY 0 10 ]
                            { label =
                                Element.row [ Element.width Element.fill ]
                                    [ if Maybe.map .name model.subtitleTrack == Maybe.map .name x then
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
                                        (Element.text (Maybe.withDefault "Disabled" (Maybe.map .name x)))
                                    ]
                            , onPress = Just (Video.SetSubtitleTrack i)
                            }
                    )
                |> (\x -> returnButton :: x)

        buttons =
            case model.settings of
                Video.All ->
                    [ speedButton, qualityButton, subtitlesButton ]

                Video.Speed ->
                    speedOptions

                Video.Quality ->
                    qualityOptions

                Video.Subtitles ->
                    subtitleOptions
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


overlay : Video -> Element Video.Msg
overlay model =
    Element.el
        (if model.animationFrame < 3000 then
            Element.width Element.fill
                :: Element.height Element.fill
                :: Font.color (Element.rgb 1 1 1)
                :: Events.overlay

         else
            Element.width Element.fill
                :: Element.height Element.fill
                :: hideCursor
                :: Font.color (Element.rgb 1 1 1)
                :: Events.overlay
        )
        (case ( not model.playing && not model.hasStarted, model.showIcon ) of
            ( True, _ ) ->
                Element.el
                    [ Element.centerX
                    , Element.centerY
                    , Element.scale 10
                    ]
                    (Icons.play True)

            ( _, Just icon ) ->
                animatedEl fadeOutZoom
                    [ Background.color (Element.rgb 0 0 0)
                    , Border.rounded 100
                    , Element.padding 10
                    , Element.centerX
                    , Element.centerY
                    ]
                    icon

            _ ->
                Element.none
        )


menu : Video -> Element Video.Msg
menu model =
    let
        rewind =
            Input.button [ Element.centerX ]
                { onPress = Just (Video.Seek (model.position - 10))
                , label = Icons.rewind True
                }

        fastForward =
            Input.button [ Element.centerX ]
                { onPress = Just (Video.Seek (model.position + 10))
                , label = Icons.fastForward True
                }

        playPause =
            Input.button [ Element.centerX ]
                { onPress = Just Video.PlayPause
                , label =
                    (if model.playing then
                        Icons.pause

                     else
                        Icons.play
                    )
                        True
                }
    in
    animatedEl
        (if model.animationFrame < 3000 then
            fadeIn

         else
            fadeOut
        )
        [ Element.width Element.fill, Element.height Element.fill ]
        (Element.row
            [ Element.width Element.fill
            , Element.centerY
            , Font.color (Element.rgba 1 1 1 0.85)
            ]
            [ Element.el [ Element.width Element.fill ] rewind
            , Element.el [ Element.width Element.fill ] playPause
            , Element.el [ Element.width Element.fill ] fastForward
            ]
        )


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
    case model.showMiniature of
        Just ( position, size ) ->
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

                rightPosition =
                    (position - 180 - 6)
                        |> max 0
                        |> min (size - 360 - 28)
                        |> toFloat
            in
            Element.column
                [ Element.moveRight rightPosition
                , Element.spacing 10
                ]
                [ Element.image
                    [ Border.color (Element.rgb 1 1 1)
                    , Border.width 2
                    ]
                    { src = miniatureUrl, description = "miniature" }
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


playPauseButton : Bool -> Element Video.Msg
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
        , onPress = Just Video.PlayPause
        }


fullscreenButton : Bool -> Element Video.Msg
fullscreenButton isFullscreen =
    Input.button []
        (if isFullscreen then
            { label = Icons.minimize False
            , onPress = Just Video.ExitFullscreen
            }

         else
            { label = Icons.maximize False
            , onPress = Just Video.RequestFullscreen
            }
        )


volumeButton : Float -> Bool -> Element Video.Msg
volumeButton volume muted =
    let
        icon =
            if muted then
                Icons.volumeX

            else if volume < 0.3 then
                Icons.volume

            else if volume < 0.6 then
                Icons.volume1

            else
                Icons.volume2
    in
    Input.button []
        { label = icon True
        , onPress = Just (Video.SetVolume volume (not muted))
        }


settingsButton : Element Video.Msg
settingsButton =
    Input.button []
        { label = Icons.settings False
        , onPress = Just Video.ToggleSettings
        }


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
        [ P.opacity 0 ]


fadeOutZoom : Animation
fadeOutZoom =
    Animation.fromTo
        { duration = 500
        , options = []
        }
        [ P.opacity 1, P.scale 1 ]
        [ P.opacity 0, P.scale 5 ]


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
