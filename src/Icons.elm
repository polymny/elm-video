module Icons exposing
    ( maximize
    , minimize
    , pause
    , play
    , playCircle
    )

import Element exposing (Element)
import Html exposing (Html)
import Svg exposing (Svg, svg)
import Svg.Attributes exposing (..)


svgFeatherIcon : String -> List (Svg msg) -> Bool -> Element msg
svgFeatherIcon className lines f =
    Element.html
        (svg
            [ if f then
                class <| "filled feather feather-" ++ className

              else
                class <| "feather feather-" ++ className
            , fill "none"
            , height "24"
            , stroke "currentColor"
            , strokeLinecap "round"
            , strokeLinejoin "round"
            , strokeWidth "2"
            , viewBox "0 0 24 24"
            , width "24"
            ]
            lines
        )


maximize : Bool -> Element msg
maximize =
    svgFeatherIcon "maximize"
        [ Svg.path [ d "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" ] []
        ]


minimize : Bool -> Element msg
minimize =
    svgFeatherIcon "minimize"
        [ Svg.path [ d "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" ] []
        ]


pause : Bool -> Element msg
pause =
    svgFeatherIcon "pause"
        [ Svg.rect [ Svg.Attributes.x "6", y "4", width "4", height "16" ] []
        , Svg.rect [ Svg.Attributes.x "14", y "4", width "4", height "16" ] []
        ]


play : Bool -> Element msg
play =
    svgFeatherIcon "play"
        [ Svg.polygon [ points "5 3 19 12 5 21 5 3" ] []
        ]


playCircle : Bool -> Element msg
playCircle =
    svgFeatherIcon "play-circle"
        [ Svg.circle [ cx "12", cy "12", r "10" ] []
        , Svg.polygon [ points "10 8 16 12 10 16 10 8" ] []
        ]
