module Main.Fullpage exposing (..)

import Browser
import Element
import Html
import Json.Decode as Decode
import Video exposing (Video)
import Video.Events as Events
import Video.Views as Views


main : Program Decode.Value Video Video.Msg
main =
    Browser.element
        { init = init
        , update = Video.update
        , view = view
        , subscriptions = Events.subs
        }


init : Decode.Value -> ( Video, Cmd Video.Msg )
init flags =
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
    in
    Video.fromConfig { url = url, id = id, autoplay = autoplay }


view : Video -> Html.Html Video.Msg
view model =
    Element.layout []
        (Views.fullpage model)
