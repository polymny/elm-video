port module Video exposing
    ( FadeTimer
    , Msg(..)
    , Settings(..)
    , SubtitleTrack
    , Video
    , autoplayRefused
    , fadeTimerIcon
    , fadeTimerOverlay
    , fromConfig
    , fromValue
    , init
    , isMobile
    , nowHasPlayerSize
    , nowHasQualities
    , nowHasQuality
    , nowHasScreenSize
    , nowHasSubtitleTrack
    , nowHasSubtitles
    , update
    )

import Json.Decode as Decode
import Material.Icons
import Material.Icons.Types exposing (Icon)
import Video.Quality as Quality exposing (Quality)


type alias Video =
    { hasStarted : Bool
    , url : String
    , id : String
    , playing : Bool
    , position : Float
    , duration : Float
    , loaded : List ( Float, Float )
    , volume : Float
    , muted : Bool
    , isFullscreen : Bool
    , quality : Maybe Quality.Quality
    , qualities : List Int
    , animationFrame : Float
    , overlayTimer : Float
    , icon : ( Float, Icon Msg )
    , size : ( Int, Int )
    , screenSize : ( Int, Int )
    , playerSize : ( Int, Int )
    , playbackRate : Float
    , settings : Maybe Settings
    , subtitles : List SubtitleTrack
    , subtitleTrack : Maybe SubtitleTrack
    , showMiniature : Maybe ( Int, Int )
    , miniaturesUrl : Maybe (List String)
    , ready : Bool
    , mobile : Bool
    , enableMiniatures : Bool
    , startTime : Maybe Float
    , holdingSeek : Bool
    , holdingVolume : Bool
    , customElement : Maybe String
    }


type alias Config =
    { url : String
    , id : String
    , autoplay : Bool
    , enableMiniatures : Bool
    , miniaturesUrl : Maybe (List String)
    , startTime : Maybe String
    , muted : Bool
    , customElement : Maybe String
    }


fromConfig : Config -> ( Video, Cmd Msg )
fromConfig config =
    let
        startTime =
            config.startTime |> Maybe.andThen parseTime
    in
    ( { hasStarted = False
      , url = config.url
      , id = config.id
      , playing = False
      , position = 0
      , duration = 0
      , loaded = []
      , volume = 1
      , muted = config.muted
      , isFullscreen = False
      , quality = Nothing
      , qualities = []
      , animationFrame = 0
      , overlayTimer = 0
      , icon = ( 0, Material.Icons.play_arrow )
      , size = ( 0, 0 )
      , screenSize = ( 0, 0 )
      , playerSize = ( 0, 0 )
      , playbackRate = 1
      , settings = Nothing
      , subtitles = []
      , subtitleTrack = Nothing
      , showMiniature = Nothing
      , ready = False
      , mobile = False
      , enableMiniatures = config.enableMiniatures
      , miniaturesUrl = config.miniaturesUrl
      , startTime = startTime
      , holdingSeek = False
      , holdingVolume = False
      , customElement = config.customElement
      }
    , init
        { id = config.id
        , url = config.url
        , autoplay = config.autoplay
        , startTime = startTime
        , muted = config.muted
        , customElement = config.customElement
        }
    )


fromValue : Decode.Value -> ( Video, Cmd Msg )
fromValue flags =
    let
        id =
            Decode.decodeValue (Decode.field "id" Decode.string) flags
                |> Result.withDefault "polymnyVideo"

        url =
            Decode.decodeValue (Decode.field "url" Decode.string) flags
                |> Result.withDefault "manifest.m3u8"

        autoplay =
            Decode.decodeValue (Decode.field "autoplay" Decode.bool) flags
                |> Result.withDefault False

        enableMiniatures =
            Decode.decodeValue (Decode.field "enableMiniatures" Decode.bool) flags
                |> Result.withDefault False

        startTime =
            Decode.decodeValue (Decode.field "startTime" Decode.string) flags
                |> Result.toMaybe

        muted =
            Decode.decodeValue (Decode.field "muted" Decode.bool) flags
                |> Result.withDefault False

        miniaturesUrl =
            Decode.decodeValue (Decode.field "miniaturesUrl" (Decode.list Decode.string)) flags
                |> Result.map Just
                |> Result.withDefault Nothing

        customElement =
            Decode.decodeValue (Decode.field "customElement" Decode.string) flags
                |> Result.map Just
                |> Result.withDefault Nothing
    in
    fromConfig
        { url = url
        , id = id
        , autoplay = autoplay
        , enableMiniatures = enableMiniatures
        , miniaturesUrl = miniaturesUrl
        , startTime = startTime
        , muted = muted
        , customElement = customElement
        }


type Settings
    = Speed
    | Quality
    | Subtitles


type alias SubtitleTrack =
    { name : String
    , groupdId : String
    , ty : String
    , autoselect : Bool
    , default : Bool
    , forced : Bool
    }


type Msg
    = Noop
    | ResetTimer
    | PlayPause
    | Seek Float (Maybe Decode.Value)
    | Unseek Decode.Value
    | ToggleSettings Settings
    | SetPlaybackRate Float
    | SetQuality Quality.Quality
    | SetSubtitleTrack Int
    | SetVolume Float Bool (Maybe Decode.Value)
    | UnsetVolume Decode.Value
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
    | NowHasSize ( Int, Int )
    | NowHasScreenSize ( Int, Int )
    | NowHasPlayerSize ( Int, Int )
    | NowHasPlaybackRate Float
    | NowHasSubtitles (List SubtitleTrack)
    | NowHasSubtitleTrack (Maybe SubtitleTrack)
    | NowHasMiniature (Maybe ( Int, Int ))
    | AutoplayRefused
    | IsMobile Bool


type alias FadeTimer =
    { fade : Float
    , disappear : Float
    }


fadeTimerOverlay : FadeTimer
fadeTimerOverlay =
    { fade = 3000
    , disappear = 3500
    }


fadeTimerIcon : FadeTimer
fadeTimerIcon =
    { fade = 0
    , disappear = 500
    }


update : Msg -> Video -> ( Video, Cmd Msg )
update msg model =
    let
        modelResetTimer =
            { model | overlayTimer = model.animationFrame }
    in
    case msg of
        Noop ->
            ( model, Cmd.none )

        ResetTimer ->
            ( modelResetTimer, Cmd.none )

        PlayPause ->
            let
                icon =
                    if model.playing then
                        Material.Icons.pause

                    else
                        Material.Icons.play_arrow
            in
            ( { modelResetTimer | icon = ( model.animationFrame, icon ) }, playPause modelResetTimer.id )

        Seek t pointerId ->
            let
                time =
                    max (min t model.duration) 0

                i =
                    if model.holdingSeek then
                        model.icon

                    else if time > model.position then
                        ( model.animationFrame, Material.Icons.fast_forward )

                    else if time < model.position then
                        ( model.animationFrame, Material.Icons.fast_rewind )

                    else
                        model.icon
            in
            case pointerId of
                Nothing ->
                    ( { modelResetTimer | icon = i }, seek modelResetTimer.id time )

                Just p ->
                    ( { modelResetTimer | holdingSeek = True }, Cmd.batch [ seek modelResetTimer.id time, setSeekbarCapture model p ] )

        Unseek pointerId ->
            ( { model | holdingSeek = False }, releaseSeekbarCapture model pointerId )

        SetPlaybackRate rate ->
            ( modelResetTimer, setPlaybackRate modelResetTimer.id rate )

        ToggleSettings s ->
            let
                newSettings =
                    case modelResetTimer.settings of
                        Nothing ->
                            Just s

                        Just a ->
                            if s == a then
                                Nothing

                            else
                                Just s
            in
            ( { modelResetTimer | settings = newSettings, overlayTimer = modelResetTimer.animationFrame }, Cmd.none )

        RequestFullscreen ->
            ( modelResetTimer, requestFullscreen modelResetTimer.id )

        ExitFullscreen ->
            ( modelResetTimer, exitFullscreen modelResetTimer.id )

        SetQuality q ->
            ( modelResetTimer, setQuality modelResetTimer.id q )

        SetSubtitleTrack t ->
            ( modelResetTimer, setSubtitleTrack modelResetTimer.id t )

        SetVolume v m pointerId ->
            let
                i =
                    if model.holdingVolume then
                        model.icon

                    else if m && not model.muted then
                        ( model.animationFrame, Material.Icons.volume_off )

                    else if not m && model.muted then
                        ( model.animationFrame, Material.Icons.volume_up )

                    else if model.volume > v then
                        ( model.animationFrame, Material.Icons.volume_down )

                    else if model.volume < v then
                        ( model.animationFrame, Material.Icons.volume_up )

                    else
                        model.icon
            in
            case pointerId of
                Nothing ->
                    ( { modelResetTimer | icon = i }, setVolume modelResetTimer.id { volume = v, muted = m } )

                Just p ->
                    ( { modelResetTimer | holdingVolume = True }, Cmd.batch [ setVolume modelResetTimer.id { volume = v, muted = m }, setVolumeBarCapture model p ] )

        UnsetVolume pointerId ->
            ( { model | holdingVolume = False }, releaseVolumeBarCapture model pointerId )

        AnimationFrameDelta delta ->
            let
                animationFrame =
                    model.animationFrame + delta

                settings =
                    if animationFrame - model.overlayTimer > fadeTimerOverlay.disappear then
                        Nothing

                    else
                        model.settings
            in
            ( { model
                | animationFrame = animationFrame
                , settings = settings
              }
            , Cmd.none
            )

        MouseMove ->
            ( modelResetTimer, Cmd.none )

        NowPlaying ->
            ( { model | playing = True, hasStarted = True }, Cmd.none )

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
            ( { model | qualities = qualities, ready = True }, Cmd.none )

        NowHasQuality quality ->
            ( { model | quality = Just quality }, Cmd.none )

        NowHasSize size ->
            ( { model | size = size }, Cmd.none )

        NowHasScreenSize size ->
            ( { model | screenSize = size }, Cmd.none )

        NowHasPlayerSize size ->
            ( { model | playerSize = size }, Cmd.none )

        NowHasPlaybackRate rate ->
            ( { model | playbackRate = rate }, Cmd.none )

        NowHasSubtitles tracks ->
            ( { model | subtitles = tracks }, Cmd.none )

        NowHasSubtitleTrack track ->
            ( { model | subtitleTrack = track }, Cmd.none )

        NowHasMiniature miniature ->
            ( { model | showMiniature = miniature }, Cmd.none )

        AutoplayRefused ->
            ( { model | hasStarted = False }, Cmd.none )

        IsMobile x ->
            ( { model | mobile = x }, Cmd.none )


parseTime : String -> Maybe Float
parseTime time =
    case String.toFloat time of
        Just t ->
            Just t

        _ ->
            let
                splitH =
                    String.split "h" time

                ( hours, restH ) =
                    case splitH of
                        [ rest ] ->
                            ( Just 0, rest )

                        [ h, rest ] ->
                            ( String.toFloat h, rest )

                        _ ->
                            ( Nothing, "" )

                splitM =
                    String.split "m" restH

                ( minutes, restM ) =
                    case splitM of
                        [ rest ] ->
                            if String.contains "s" rest then
                                ( Just 0, rest )

                            else if rest == "" then
                                ( Just 0, "" )

                            else
                                ( String.toFloat rest, "" )

                        [ m, rest ] ->
                            ( String.toFloat m, rest )

                        _ ->
                            ( Nothing, "" )

                splitS =
                    String.split "s" restM

                ( realMinutes, seconds ) =
                    case splitS of
                        [ "" ] ->
                            ( minutes, Just 0 )

                        [ rest ] ->
                            ( String.toFloat rest, Just 0 )

                        [ s, "" ] ->
                            ( minutes, String.toFloat s )

                        _ ->
                            ( Nothing, Nothing )
            in
            case ( hours, realMinutes, seconds ) of
                ( Just h, Just m, Just s ) ->
                    Just (3600 * h + 60 * m + s)

                _ ->
                    Nothing


type alias InitAttr =
    { id : String
    , url : String
    , autoplay : Bool
    , startTime : Maybe Float
    , muted : Bool
    , customElement : Maybe String
    }


port polymnyVideoInit : InitAttr -> Cmd msg


init : InitAttr -> Cmd msg
init attr =
    polymnyVideoInit attr


port polymnyVideoPlayPause : String -> Cmd msg


playPause : String -> Cmd msg
playPause =
    polymnyVideoPlayPause


port polymnyVideoSeek : ( String, Float ) -> Cmd msg


seek : String -> Float -> Cmd msg
seek id s =
    polymnyVideoSeek ( id, s )


port polymnyVideoRequestFullscreen : String -> Cmd msg


requestFullscreen : String -> Cmd msg
requestFullscreen =
    polymnyVideoRequestFullscreen


port polymnyVideoExitFullscreen : String -> Cmd msg


exitFullscreen : String -> Cmd msg
exitFullscreen =
    polymnyVideoExitFullscreen


port polymnyVideoSetPlaybackRate : ( String, Float ) -> Cmd msg


setPlaybackRate : String -> Float -> Cmd msg
setPlaybackRate id playbackRate =
    polymnyVideoSetPlaybackRate ( id, playbackRate )


port polymnyVideoSetQuality : ( String, Quality ) -> Cmd msg


setQuality : String -> Quality -> Cmd msg
setQuality id quality =
    polymnyVideoSetQuality ( id, quality )


port polymnyVideoSetSubtitleTrack : ( String, Int ) -> Cmd msg


setSubtitleTrack : String -> Int -> Cmd msg
setSubtitleTrack id track =
    polymnyVideoSetSubtitleTrack ( id, track )


port polymnyVideoSetVolume : ( String, { volume : Float, muted : Bool } ) -> Cmd msg


setVolume : String -> { volume : Float, muted : Bool } -> Cmd msg
setVolume id volume =
    polymnyVideoSetVolume ( id, volume )


port polymnyVideoNowHasQualities : (List Int -> msg) -> Sub msg


nowHasQualities : (List Int -> msg) -> Sub msg
nowHasQualities =
    polymnyVideoNowHasQualities


port polymnyVideoNowHasQuality : (Decode.Value -> msg) -> Sub msg


nowHasQuality : (Decode.Value -> msg) -> Sub msg
nowHasQuality =
    polymnyVideoNowHasQuality


port polymnyVideoNowHasSubtitles : (Decode.Value -> msg) -> Sub msg


nowHasSubtitles : (Decode.Value -> msg) -> Sub msg
nowHasSubtitles =
    polymnyVideoNowHasSubtitles


port polymnyVideoNowHasSubtitleTrack : (Decode.Value -> msg) -> Sub msg


nowHasSubtitleTrack : (Decode.Value -> msg) -> Sub msg
nowHasSubtitleTrack =
    polymnyVideoNowHasSubtitleTrack


port polymnyVideoNowHasScreenSize : (( Int, Int ) -> msg) -> Sub msg


nowHasScreenSize : (( Int, Int ) -> msg) -> Sub msg
nowHasScreenSize =
    polymnyVideoNowHasScreenSize


port polymnyVideoNowHasPlayerSize : (( Int, Int ) -> msg) -> Sub msg


nowHasPlayerSize : (( Int, Int ) -> msg) -> Sub msg
nowHasPlayerSize =
    polymnyVideoNowHasPlayerSize


port polymnyVideoAutoplayRefused : (() -> msg) -> Sub msg


autoplayRefused : msg -> Sub msg
autoplayRefused msg =
    polymnyVideoAutoplayRefused (\_ -> msg)


port polymnyVideoIsMobile : (Bool -> msg) -> Sub msg


isMobile : (Bool -> msg) -> Sub msg
isMobile =
    polymnyVideoIsMobile


port polymnyVideoSetSeekbarCapture : ( String, Decode.Value ) -> Cmd msg


setSeekbarCapture : Video -> Decode.Value -> Cmd msg
setSeekbarCapture model pointerId =
    polymnyVideoSetSeekbarCapture ( model.id, pointerId )


port polymnyVideoReleaseSeekbarCapture : ( String, Decode.Value ) -> Cmd msg


releaseSeekbarCapture : Video -> Decode.Value -> Cmd msg
releaseSeekbarCapture model pointerId =
    polymnyVideoReleaseSeekbarCapture ( model.id, pointerId )


port polymnyVideoSetVolumeBarCapture : ( String, Decode.Value ) -> Cmd msg


setVolumeBarCapture : Video -> Decode.Value -> Cmd msg
setVolumeBarCapture model pointerId =
    polymnyVideoSetVolumeBarCapture ( model.id, pointerId )


port polymnyVideoReleaseVolumeBarCapture : ( String, Decode.Value ) -> Cmd msg


releaseVolumeBarCapture : Video -> Decode.Value -> Cmd msg
releaseVolumeBarCapture model pointerId =
    polymnyVideoReleaseVolumeBarCapture ( model.id, pointerId )
