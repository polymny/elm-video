module Examples.Embed exposing (..)

import Browser
import Browser.Events
import Element exposing (Element)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html
import Html.Attributes
import Html.Events
import Json.Decode as Decode
import Simple.Animation as Animation exposing (Animation)
import Simple.Animation.Animated as Animated
import Simple.Animation.Property as P
import Video exposing (Video)
import Video.Events as Events
import Video.Views as Views


main : Program Decode.Value Model Msg
main =
    Browser.application
        { init = \url _ _ -> init url
        , update = update
        , view = view
        , subscriptions =
            \model ->
                Sub.batch
                    [ Events.subs model.video |> Sub.map VideoMsg
                    , Browser.Events.onResize (\x y -> NowHasScreenSize ( x, y ))
                    ]
        , onUrlChange = \_ -> Noop
        , onUrlRequest = \_ -> Noop
        }


type alias Model =
    { video : Video
    , screenSize : ( Int, Int )
    }


type Msg
    = Noop
    | VideoMsg Video.Msg
    | NowHasScreenSize ( Int, Int )


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

        ( video, cmd ) =
            Video.fromUrl url "video"
    in
    ( { video = video, screenSize = ( width, height ) }
    , Cmd.map VideoMsg cmd
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Noop ->
            ( model, Cmd.none )

        VideoMsg m ->
            let
                ( video, cmd ) =
                    Video.update m model.video
            in
            ( { model | video = video }, Cmd.map VideoMsg cmd )

        NowHasScreenSize size ->
            ( { model | screenSize = size }, Cmd.none )


view : Model -> Browser.Document Msg
view model =
    { title = "Hello"
    , body =
        [ Element.layout [ Element.height Element.fill ]
            (Element.map VideoMsg (Views.embed model.screenSize model.video))
        ]
    }
