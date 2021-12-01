module Video.Events exposing (overlay, overlayKey, player, seekBar, subs, video, volumeBar)

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
        , Browser.Events.onResize (\x y -> Video.NowHasScreenSize ( x, y ))
        , Browser.Events.onAnimationFrameDelta Video.AnimationFrameDelta
        , Browser.Events.onKeyDown (decodeKeyDown False model)
        ]


player : List (Element.Attribute Video.Msg)
player =
    List.map Element.htmlAttribute
        [ Html.Events.on "fullscreenchange" decodeFullscreenChange
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


overlay : Video -> List (Element.Attribute Video.Msg)
overlay model =
    [ Element.htmlAttribute (Html.Events.on "click" (Decode.succeed Video.PlayPause))
    ]


overlayKey : Video -> Element.Attribute Video.Msg
overlayKey model =
    Element.htmlAttribute (Html.Events.on "keydown" (decodeKeyDown True model))


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
        |> Decode.field "fullscreenElement"
        |> Decode.field "polymnyVideoDocument"
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

                    ( _, "KeyJ" ) ->
                        Decode.succeed (Video.Seek (max 0 (model.position - 10)))

                    ( _, "KeyL" ) ->
                        Decode.succeed (Video.Seek (min model.duration (model.position + 10)))

                    ( _, "KeyK" ) ->
                        Decode.succeed Video.PlayPause

                    ( True, "ArrowLeft" ) ->
                        Decode.succeed (Video.Seek (max 0 (model.position - 5)))

                    ( True, "ArrowRight" ) ->
                        Decode.succeed (Video.Seek (min model.duration (model.position + 5)))

                    ( True, "ArrowDown" ) ->
                        Decode.succeed (Video.SetVolume (max 0 (model.volume - 0.1)) model.muted)

                    ( True, "ArrowUp" ) ->
                        Decode.succeed (Video.SetVolume (min 1 (model.volume + 0.1)) model.muted)

                    ( _, "KeyM" ) ->
                        Decode.succeed (Video.SetVolume model.volume (not model.muted))

                    ( _, "KeyF" ) ->
                        Decode.succeed
                            (if model.isFullscreen then
                                Video.ExitFullscreen

                             else
                                Video.RequestFullscreen
                            )

                    ( _, "Digit0" ) ->
                        Decode.succeed (Video.Seek 0)

                    ( _, "Numpad0" ) ->
                        Decode.succeed (Video.Seek 0)

                    ( _, "Digit1" ) ->
                        Decode.succeed (Video.Seek (0.1 * model.duration))

                    ( _, "Numpad1" ) ->
                        Decode.succeed (Video.Seek (0.1 * model.duration))

                    ( _, "Digit2" ) ->
                        Decode.succeed (Video.Seek (0.2 * model.duration))

                    ( _, "Numpad2" ) ->
                        Decode.succeed (Video.Seek (0.2 * model.duration))

                    ( _, "Digit3" ) ->
                        Decode.succeed (Video.Seek (0.3 * model.duration))

                    ( _, "Numpad3" ) ->
                        Decode.succeed (Video.Seek (0.3 * model.duration))

                    ( _, "Digit4" ) ->
                        Decode.succeed (Video.Seek (0.4 * model.duration))

                    ( _, "Numpad4" ) ->
                        Decode.succeed (Video.Seek (0.4 * model.duration))

                    ( _, "Digit5" ) ->
                        Decode.succeed (Video.Seek (0.5 * model.duration))

                    ( _, "Numpad5" ) ->
                        Decode.succeed (Video.Seek (0.5 * model.duration))

                    ( _, "Digit6" ) ->
                        Decode.succeed (Video.Seek (0.6 * model.duration))

                    ( _, "Numpad6" ) ->
                        Decode.succeed (Video.Seek (0.6 * model.duration))

                    ( _, "Digit7" ) ->
                        Decode.succeed (Video.Seek (0.7 * model.duration))

                    ( _, "Numpad7" ) ->
                        Decode.succeed (Video.Seek (0.7 * model.duration))

                    ( _, "Digit8" ) ->
                        Decode.succeed (Video.Seek (0.8 * model.duration))

                    ( _, "Numpad8" ) ->
                        Decode.succeed (Video.Seek (0.8 * model.duration))

                    ( _, "Digit10" ) ->
                        Decode.succeed (Video.Seek (0.9 * model.duration))

                    ( _, "Numpad9" ) ->
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
