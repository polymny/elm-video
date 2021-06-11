module Quality exposing (Quality, decode, isSameOption, toString)

import Json.Decode as Decode


type alias Quality =
    { auto : Bool
    , height : Int
    }


toString : Quality -> String
toString { auto, height } =
    if height == 0 then
        "Auto"

    else if auto then
        "Auto (" ++ String.fromInt height ++ "p)"

    else
        String.fromInt height ++ "p"


isSameOption : Maybe Quality -> Maybe Quality -> Bool
isSameOption quality1 quality2 =
    case ( quality1, quality2 ) of
        ( Just q1, Just q2 ) ->
            autoHeight q1 == autoHeight q2

        ( Nothing, Nothing ) ->
            True

        _ ->
            False


autoHeight : Quality -> Int
autoHeight { auto, height } =
    if auto then
        0

    else
        height


decode : Decode.Decoder Quality
decode =
    Decode.map2 Quality
        (Decode.field "auto" Decode.bool)
        (Decode.field "height" Decode.int)
