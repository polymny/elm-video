module Events exposing (player, seekBar, subs, video)

import Browser.Events
import DOM as Dom
import Element
import Html
import Html.Attributes
import Html.Events
import Json.Decode as Decode
import Quality
import Video exposing (Video)


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
        , Browser.Events.onAnimationFrameDelta Video.AnimationFrameDelta
        , Browser.Events.onKeyDown (decodeKeyDown model)
        ]


player : List (Element.Attribute Video.Msg)
player =
    List.map Element.htmlAttribute
        [ Html.Events.on "fullscreenchange" decodeFullscreenChange
        , Html.Events.on "mousemove" (Decode.succeed Video.MouseMove)
        ]


video : List (Html.Attribute Video.Msg)
video =
    [ Html.Attributes.id "video"
    , Html.Events.on "playing" (Decode.succeed Video.NowPlaying)
    , Html.Events.on "pause" (Decode.succeed Video.NowPaused)
    , Html.Events.on "durationchange" decodeDurationChanged
    , Html.Events.on "timeupdate" decodePosition
    , Html.Events.on "volumechange" decodeVolumeChange
    , Html.Events.on "progress" decodeProgress
    , Html.Events.on "resize" decodeVideoResize
    , Html.Events.on "ratechange" decodePlaybackRateChange
    ]


seekBar : Video -> List (Element.Attribute Video.Msg)
seekBar model =
    List.map Element.htmlAttribute
        [ Html.Events.on "click" (decodeSeek model)
        ]


decodeDurationChanged : Decode.Decoder Video.Msg
decodeDurationChanged =
    Dom.target <|
        Decode.map Video.NowHasDuration
            (Decode.field "duration" Decode.float)


decodePosition : Decode.Decoder Video.Msg
decodePosition =
    Dom.target <|
        Decode.map Video.NowAtPosition
            (Decode.field "currentTime" Decode.float)


decodeVolumeChange : Decode.Decoder Video.Msg
decodeVolumeChange =
    Dom.target <|
        Decode.map2 Video.NowAtVolume
            (Decode.field "volume" Decode.float)
            (Decode.field "muted" Decode.bool)


decodeSeek : Video -> Decode.Decoder Video.Msg
decodeSeek model =
    Decode.map2 (\x y -> Video.Seek (toFloat x / toFloat y * model.duration))
        (Decode.field "layerX" Decode.int)
        (Dom.target <| Decode.field "offsetWidth" Decode.int)


decodeProgress : Decode.Decoder Video.Msg
decodeProgress =
    decodeTimeRanges
        |> Decode.field "asArray"
        |> Decode.field "buffered"
        |> Dom.target
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
        |> Decode.field "document"
        |> Dom.target
        |> Decode.map (\x -> Video.NowIsFullscreen (x /= Nothing))


decodeVideoResize : Decode.Decoder Video.Msg
decodeVideoResize =
    Dom.target <|
        Decode.map2 (\x y -> Video.NowHasSize ( x, y ))
            (Decode.field "videoWidth" Decode.int)
            (Decode.field "videoHeight" Decode.int)


decodePlaybackRateChange : Decode.Decoder Video.Msg
decodePlaybackRateChange =
    Dom.target <|
        Decode.map Video.NowHasPlaybackRate
            (Decode.field "playbackRate" Decode.float)


decodeKeyDown : Video -> Decode.Decoder Video.Msg
decodeKeyDown model =
    Decode.field "keyCode" Decode.int
        |> Decode.andThen
            (\x ->
                case x of
                    -- Enter key
                    32 ->
                        Decode.succeed Video.PlayPause

                    -- J key
                    74 ->
                        Decode.succeed (Video.Seek (max 0 (model.position - 10)))

                    -- L key
                    76 ->
                        Decode.succeed (Video.Seek (min model.duration (model.position + 10)))

                    -- K key
                    75 ->
                        Decode.succeed Video.PlayPause

                    -- Left arrow
                    37 ->
                        Decode.succeed (Video.Seek (max 0 (model.position - 5)))

                    -- Right arrow
                    39 ->
                        Decode.succeed (Video.Seek (min model.duration (model.position + 5)))

                    -- Down arrow
                    40 ->
                        Decode.succeed (Video.SetVolume (max 0 (model.volume - 0.1)) model.muted)

                    -- Top arrow
                    38 ->
                        Decode.succeed (Video.SetVolume (min 1 (model.volume + 0.1)) model.muted)

                    -- M key
                    77 ->
                        Decode.succeed (Video.SetVolume model.volume (not model.muted))

                    -- F key
                    70 ->
                        Decode.succeed
                            (if model.isFullscreen then
                                Video.ExitFullscreen

                             else
                                Video.RequestFullscreen
                            )

                    _ ->
                        Decode.fail ("no shortcut for code " ++ String.fromInt x)
            )
