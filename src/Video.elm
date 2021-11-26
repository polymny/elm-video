port module Video exposing
    ( Msg(..)
    , Settings(..)
    , SubtitleTrack
    , Video
    , fromConfig
    , init
    , nowHasQualities
    , nowHasQuality
    , nowHasScreenSize
    , nowHasSubtitleTrack
    , nowHasSubtitles
    , update
    )

import Json.Decode as Decode
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
    , size : ( Int, Int )
    , screenSize : ( Int, Int )
    , playbackRate : Float
    , settings : Settings
    , subtitles : List SubtitleTrack
    , subtitleTrack : Maybe SubtitleTrack
    , showMiniature : Maybe ( Int, Int )
    , mobile : Bool
    , ready : Bool
    }


type alias Config =
    { url : String
    , id : String
    , autoplay : Bool
    , mobile : Bool
    }


fromConfig : Config -> ( Video, Cmd Msg )
fromConfig config =
    ( { hasStarted = False
      , url = config.url
      , id = config.id
      , playing = False
      , position = 0
      , duration = 0
      , loaded = []
      , volume = 1
      , muted = False
      , isFullscreen = False
      , quality = Nothing
      , qualities = []
      , animationFrame = 0
      , size = ( 0, 0 )
      , screenSize = ( 0, 0 )
      , playbackRate = 1
      , settings = None
      , subtitles = []
      , subtitleTrack = Nothing
      , showMiniature = Nothing
      , mobile = config.mobile
      , ready = False
      }
    , init config.id config.url config.autoplay
    )


type Settings
    = None
    | Speed
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
    | PlayPause
    | Seek Float
    | SetSettings Settings
    | SetPlaybackRate Float
    | SetQuality Quality.Quality
    | SetSubtitleTrack Int
    | SetVolume Float Bool
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
    | NowHasPlaybackRate Float
    | NowHasSubtitles (List SubtitleTrack)
    | NowHasSubtitleTrack (Maybe SubtitleTrack)
    | NowHasMiniature (Maybe ( Int, Int ))


update : Msg -> Video -> ( Video, Cmd Msg )
update msg model =
    case msg of
        Noop ->
            ( model, Cmd.none )

        PlayPause ->
            ( model, playPause model.id )

        Seek time ->
            ( model, seek model.id time )

        SetPlaybackRate rate ->
            ( model, setPlaybackRate model.id rate )

        SetSettings s ->
            ( { model | settings = s }, Cmd.none )

        RequestFullscreen ->
            ( model, requestFullscreen model.id )

        ExitFullscreen ->
            ( model, exitFullscreen model.id )

        SetQuality q ->
            ( model, setQuality model.id q )

        SetSubtitleTrack t ->
            ( model, setSubtitleTrack model.id t )

        SetVolume v m ->
            ( model, setVolume model.id { volume = v, muted = m } )

        AnimationFrameDelta delta ->
            let
                animationFrame =
                    model.animationFrame + delta

                settings =
                    if animationFrame > 3500 then
                        None

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
            ( { model | animationFrame = 0 }, Cmd.none )

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

        NowHasPlaybackRate rate ->
            ( { model | playbackRate = rate }, Cmd.none )

        NowHasSubtitles tracks ->
            ( { model | subtitles = tracks }, Cmd.none )

        NowHasSubtitleTrack track ->
            ( { model | subtitleTrack = track }, Cmd.none )

        NowHasMiniature miniature ->
            ( { model | showMiniature = miniature }, Cmd.none )


port polymnyVideoInit : ( String, String, Bool ) -> Cmd msg


init : String -> String -> Bool -> Cmd msg
init id url autoplay =
    polymnyVideoInit ( id, url, autoplay )


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
