module Video.Events exposing (overlay, overlayKey, player, seekBar, startOverlay, subs, video, volumeBar)

import Browser.Events
import Element
import Html
import Html.Attributes
import Html.Events
import Json.Decode as Decode
import Video exposing (Video)
import Video.Quality as Quality


subs : Video -> Sub Video.Msg
subs model =
    Sub.batch
        [ Video.nowHasQualities Video.NowHasQualities
        , Video.nowHasQuality
            (\x ->
                case Decode.decodeValue Quality.decode x of
                    Ok s ->
                        Video.NowHasQuality s

                    _ ->
                        Video.Noop
            )
        , Video.nowHasSubtitles
            (\x ->
                case Decode.decodeValue decodeSubtitles x of
                    Ok s ->
                        Video.NowHasSubtitles s

                    _ ->
                        Video.Noop
            )
        , Video.nowHasSubtitleTrack
            (\x ->
                case Decode.decodeValue decodeMaybeSubtitleTrack x of
                    Ok t ->
                        Video.NowHasSubtitleTrack t

                    _ ->
                        Video.Noop
            )
        , Video.nowHasScreenSize Video.NowHasScreenSize
        , Video.nowHasPlayerSize Video.NowHasPlayerSize
        , Video.autoplayRefused Video.AutoplayRefused
        , Browser.Events.onResize (\x y -> Video.NowHasScreenSize ( x, y ))
        , Browser.Events.onAnimationFrameDelta Video.AnimationFrameDelta
        , Browser.Events.onKeyDown (decodeKeyDown False model)
        ]


player : List (Element.Attribute Video.Msg)
player =
    List.map Element.htmlAttribute
        [ Html.Events.on "fullscreenchange" decodeFullscreenChange
        , Html.Events.on "webkitfullscreenchange" decodeFullscreenChange
        , Html.Events.on "mousemove" (Decode.succeed Video.MouseMove)
        ]


video : Video -> List (Html.Attribute Video.Msg)
video model =
    [ Html.Attributes.id model.id
    , Html.Events.on "playing" (Decode.succeed Video.NowPlaying)
    , Html.Events.on "pause" (Decode.succeed Video.NowPaused)
    , Html.Events.on "durationchange" decodeDurationChanged
    , Html.Events.on "timeupdate" decodePosition
    , Html.Events.on "volumechange" decodeVolumeChange
    , Html.Events.on "progress" decodeProgress
    , Html.Events.on "resize" decodeVideoResize
    , Html.Events.on "ratechange" decodePlaybackRateChange
    ]


startOverlay : Element.Attribute Video.Msg
startOverlay =
    Element.htmlAttribute (Html.Events.on "click" (Decode.succeed Video.PlayPause))


overlay : Video -> List (Element.Attribute Video.Msg)
overlay model =
    if model.mobile then
        [ Element.htmlAttribute (Html.Events.on "click" (Decode.succeed Video.ResetTimer)) ]

    else
        [ Element.htmlAttribute (Html.Events.on "click" (Decode.succeed Video.PlayPause))
        ]


overlayKey : Video -> Element.Attribute Video.Msg
overlayKey model =
    decodeKeyDown True model
        |> Decode.map (\x -> ( x, True ))
        |> Html.Events.preventDefaultOn "keydown"
        |> Element.htmlAttribute


seekBar : Video -> List (Element.Attribute Video.Msg)
seekBar model =
    List.map Element.htmlAttribute
        [ Html.Events.on "click" (decodeSeek model)
        , Html.Events.on "mouseenter" decodeMouseEnter
        , Html.Events.on "mouseleave" decodeMouseLeave
        , Html.Events.on "mousemove" decodeMouseEnter
        ]


volumeBar : Element.Attribute Video.Msg
volumeBar =
    Element.htmlAttribute (Html.Events.on "click" decodeVolumeBar)


decodeVolumeBar : Decode.Decoder Video.Msg
decodeVolumeBar =
    Decode.map2 (\x y -> Video.SetVolume (toFloat x / toFloat y) False)
        (Decode.field "layerX" Decode.int)
        (Decode.field "target" <| Decode.field "offsetWidth" Decode.int)


decodeDurationChanged : Decode.Decoder Video.Msg
decodeDurationChanged =
    Decode.field "target" <|
        Decode.map Video.NowHasDuration
            (Decode.field "duration" Decode.float)


decodePosition : Decode.Decoder Video.Msg
decodePosition =
    Decode.field "target" <|
        Decode.map Video.NowAtPosition
            (Decode.field "currentTime" Decode.float)


decodeVolumeChange : Decode.Decoder Video.Msg
decodeVolumeChange =
    Decode.field "target" <|
        Decode.map2 Video.NowAtVolume
            (Decode.field "volume" Decode.float)
            (Decode.field "muted" Decode.bool)


decodeSeek : Video -> Decode.Decoder Video.Msg
decodeSeek model =
    Decode.map2 (\x y -> Video.Seek (toFloat x / toFloat y * model.duration))
        (Decode.field "layerX" Decode.int)
        (Decode.field "target" <| Decode.field "offsetWidth" Decode.int)


decodeProgress : Decode.Decoder Video.Msg
decodeProgress =
    decodeTimeRanges
        |> Decode.field "polymnyVideoAsArray"
        |> Decode.field "buffered"
        |> Decode.field "target"
        |> Decode.map Video.NowLoaded


decodeTimeRanges : Decode.Decoder (List ( Float, Float ))
decodeTimeRanges =
    Decode.list decodeTimeRange


decodeTimeRange : Decode.Decoder ( Float, Float )
decodeTimeRange =
    Decode.map2 Tuple.pair
        (Decode.field "start" Decode.float)
        (Decode.field "end" Decode.float)


decodeFullscreenChange : Decode.Decoder Video.Msg
decodeFullscreenChange =
    Decode.value
        |> Decode.nullable
        |> Decode.field "polymnyVideoFullscreenElement"
        |> Decode.field "target"
        |> Decode.map (\x -> Video.NowIsFullscreen (x /= Nothing))


decodeVideoResize : Decode.Decoder Video.Msg
decodeVideoResize =
    Decode.field "target" <|
        Decode.map2 (\x y -> Video.NowHasSize ( x, y ))
            (Decode.field "videoWidth" Decode.int)
            (Decode.field "videoHeight" Decode.int)


decodePlaybackRateChange : Decode.Decoder Video.Msg
decodePlaybackRateChange =
    Decode.field "target" <|
        Decode.map Video.NowHasPlaybackRate
            (Decode.field "playbackRate" Decode.float)


decodeMouseEnter : Decode.Decoder Video.Msg
decodeMouseEnter =
    Decode.map2 (\x y -> Video.NowHasMiniature (Just ( x, y )))
        (Decode.field "offsetX" Decode.int)
        (Decode.field "target" <| Decode.field "offsetWidth" Decode.int)


decodeMouseLeave : Decode.Decoder Video.Msg
decodeMouseLeave =
    Decode.succeed (Video.NowHasMiniature Nothing)


decodeKeyDown : Bool -> Video -> Decode.Decoder Video.Msg
decodeKeyDown focusonly model =
    Decode.field "code" Decode.string
        |> Decode.andThen
            (\x ->
                case ( focusonly, x ) of
                    ( True, "Space" ) ->
                        Decode.succeed Video.PlayPause

                    ( False, "KeyJ" ) ->
                        Decode.succeed (Video.Seek (max 0 (model.position - 10)))

                    ( False, "KeyL" ) ->
                        Decode.succeed (Video.Seek (min model.duration (model.position + 10)))

                    ( False, "KeyK" ) ->
                        Decode.succeed Video.PlayPause

                    ( True, "ArrowLeft" ) ->
                        Decode.succeed (Video.Seek (max 0 (model.position - 5)))

                    ( True, "ArrowRight" ) ->
                        Decode.succeed (Video.Seek (min model.duration (model.position + 5)))

                    ( True, "ArrowDown" ) ->
                        Decode.succeed (Video.SetVolume (max 0 (model.volume - 0.1)) model.muted)

                    ( True, "ArrowUp" ) ->
                        Decode.succeed (Video.SetVolume (min 1 (model.volume + 0.1)) model.muted)

                    ( False, "KeyM" ) ->
                        Decode.succeed (Video.SetVolume model.volume (not model.muted))

                    ( False, "KeyF" ) ->
                        Decode.succeed
                            (if model.isFullscreen then
                                Video.ExitFullscreen

                             else
                                Video.RequestFullscreen
                            )

                    ( False, "Digit0" ) ->
                        Decode.succeed (Video.Seek 0)

                    ( False, "Numpad0" ) ->
                        Decode.succeed (Video.Seek 0)

                    ( False, "Digit1" ) ->
                        Decode.succeed (Video.Seek (0.1 * model.duration))

                    ( False, "Numpad1" ) ->
                        Decode.succeed (Video.Seek (0.1 * model.duration))

                    ( False, "Digit2" ) ->
                        Decode.succeed (Video.Seek (0.2 * model.duration))

                    ( False, "Numpad2" ) ->
                        Decode.succeed (Video.Seek (0.2 * model.duration))

                    ( False, "Digit3" ) ->
                        Decode.succeed (Video.Seek (0.3 * model.duration))

                    ( False, "Numpad3" ) ->
                        Decode.succeed (Video.Seek (0.3 * model.duration))

                    ( False, "Digit4" ) ->
                        Decode.succeed (Video.Seek (0.4 * model.duration))

                    ( False, "Numpad4" ) ->
                        Decode.succeed (Video.Seek (0.4 * model.duration))

                    ( False, "Digit5" ) ->
                        Decode.succeed (Video.Seek (0.5 * model.duration))

                    ( False, "Numpad5" ) ->
                        Decode.succeed (Video.Seek (0.5 * model.duration))

                    ( False, "Digit6" ) ->
                        Decode.succeed (Video.Seek (0.6 * model.duration))

                    ( False, "Numpad6" ) ->
                        Decode.succeed (Video.Seek (0.6 * model.duration))

                    ( False, "Digit7" ) ->
                        Decode.succeed (Video.Seek (0.7 * model.duration))

                    ( False, "Numpad7" ) ->
                        Decode.succeed (Video.Seek (0.7 * model.duration))

                    ( False, "Digit8" ) ->
                        Decode.succeed (Video.Seek (0.8 * model.duration))

                    ( False, "Numpad8" ) ->
                        Decode.succeed (Video.Seek (0.8 * model.duration))

                    ( False, "Digit10" ) ->
                        Decode.succeed (Video.Seek (0.9 * model.duration))

                    ( False, "Numpad9" ) ->
                        Decode.succeed (Video.Seek (0.9 * model.duration))

                    _ ->
                        Decode.fail ("no shortcut for code " ++ x)
            )


decodeSubtitleTrack : Decode.Decoder Video.SubtitleTrack
decodeSubtitleTrack =
    Decode.map6 Video.SubtitleTrack
        (Decode.field "name" Decode.string)
        (Decode.field "groupId" Decode.string)
        (Decode.field "type" Decode.string)
        (Decode.field "autoselect" Decode.bool)
        (Decode.field "default" Decode.bool)
        (Decode.field "forced" Decode.bool)


decodeMaybeSubtitleTrack : Decode.Decoder (Maybe Video.SubtitleTrack)
decodeMaybeSubtitleTrack =
    Decode.nullable decodeSubtitleTrack


decodeSubtitles : Decode.Decoder (List Video.SubtitleTrack)
decodeSubtitles =
    Decode.list decodeSubtitleTrack
