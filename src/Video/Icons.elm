module Video.Icons exposing (..)

import Element exposing (Element)
import Material.Icons.Types exposing (Coloring(..), Icon)
import Svg exposing (Svg, g, svg)
import Svg.Attributes exposing (..)


makeIcon : List (Svg.Attribute msg) -> List (Svg msg) -> Icon msg
makeIcon attributes nodes size _ =
    let
        sizeAsString =
            String.fromInt size
    in
    svg
        (attributes ++ [ height sizeAsString, width sizeAsString ])
        [ g
            [ fill "currentColor"
            ]
            nodes
        ]


spinner : Icon msg
spinner =
    makeIcon
        [ viewBox "0 0 24 24" ]
        [ Svg.path [ d "M0 0h24v24H0z", fill "none" ] []
        , Svg.path [ d "M2 12A 10 10 10 1 1 12 22", fill "none", stroke "currentColor", strokeWidth "2" ] []
        ]


icon : Int -> Icon msg -> Element msg
icon size material =
    Element.html (material size Inherit)
