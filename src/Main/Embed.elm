module Main.Embed exposing (..)

import Browser
import Json.Decode as Decode
import Video exposing (Video)
import Video.Events as Events
import Video.Views as Views


main : Program Decode.Value Video Video.Msg
main =
    Browser.element
        { init = Video.fromValue
        , update = Video.update
        , view = Views.embed
        , subscriptions = Events.subs
        }
