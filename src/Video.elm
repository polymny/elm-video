port module Video exposing (Msg(..), Settings(..), Video, fromUrl, init, nowHasQualities, nowHasQuality, update)

import Json.Decode as Decode
import Quality exposing (Quality)


type alias Video =
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
    , size : ( Int, Int )
    , playbackRate : Float
    , settings : Settings
    , showSettings : Bool
    }


fromUrl : String -> Video
fromUrl url =
    { url = url
    , playing = False
    , position = 0
    , duration = 0
    , loaded = []
    , volume = 1
    , muted = False
    , isFullscreen = False
    , quality = Nothing
    , qualities = []
    , showBar = True
    , animationFrame = 0
    , size = ( 0, 0 )
    , playbackRate = 1
    , settings = All
    , showSettings = False
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
    | NowHasPlaybackRate Float


update : Msg -> Video -> ( Video, Cmd Msg )
update msg model =
    case msg of
        Noop ->
            ( model, Cmd.none )

        PlayPause ->
            ( model, playPause )

        Seek time ->
            ( model, seek time )

        SetPlaybackRate rate ->
            ( { model | showSettings = False, settings = All }, setPlaybackRate rate )

        ToggleSettings ->
            ( { model | showSettings = not model.showSettings }, Cmd.none )

        SetSettings s ->
            ( { model | settings = s }, Cmd.none )

        RequestFullscreen ->
            ( model, requestFullscreen )

        ExitFullscreen ->
            ( model, exitFullscreen )

        SetQuality q ->
            ( { model | showSettings = False, settings = All }, setQuality q )

        SetVolume v m ->
            ( model, setVolume { volume = v, muted = m } )

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

        NowHasSize size ->
            ( { model | size = size }, Cmd.none )

        NowHasPlaybackRate rate ->
            ( { model | playbackRate = rate }, Cmd.none )


port polymnyVideoInit : String -> Cmd msg


init : String -> Cmd msg
init =
    polymnyVideoInit


port polymnyVideoPlayPause : () -> Cmd msg


playPause : Cmd msg
playPause =
    polymnyVideoPlayPause ()


port polymnyVideoSeek : Float -> Cmd msg


seek : Float -> Cmd msg
seek =
    polymnyVideoSeek


port polymnyVideoRequestFullscreen : () -> Cmd msg


requestFullscreen : Cmd msg
requestFullscreen =
    polymnyVideoRequestFullscreen ()


port polymnyVideoExitFullscreen : () -> Cmd msg


exitFullscreen : Cmd msg
exitFullscreen =
    polymnyVideoExitFullscreen ()


port polymnyVideoSetPlaybackRate : Float -> Cmd msg


setPlaybackRate : Float -> Cmd msg
setPlaybackRate =
    polymnyVideoSetPlaybackRate


port polymnyVideoSetQuality : Quality -> Cmd msg


setQuality : Quality -> Cmd msg
setQuality =
    polymnyVideoSetQuality


port polymnyVideoSetVolume : { volume : Float, muted : Bool } -> Cmd msg


setVolume : { volume : Float, muted : Bool } -> Cmd msg
setVolume =
    polymnyVideoSetVolume


port polymnyVideoNowHasQualities : (List Int -> msg) -> Sub msg


nowHasQualities : (List Int -> msg) -> Sub msg
nowHasQualities =
    polymnyVideoNowHasQualities


port polymnyVideoNowHasQuality : (Decode.Value -> msg) -> Sub msg


nowHasQuality : (Decode.Value -> msg) -> Sub msg
nowHasQuality =
    polymnyVideoNowHasQuality
