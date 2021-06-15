module Icons exposing (..)

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


settings : Bool -> Element msg
settings =
    svgFeatherIcon "settings"
        [ Svg.circle [ cx "12", cy "12", r "3" ] []
        , Svg.path [ d "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" ] []
        ]


check : Bool -> Element msg
check =
    svgFeatherIcon "check"
        [ Svg.polyline [ points "20 6 9 17 4 12" ] []
        ]


volume : Bool -> Element msg
volume =
    svgFeatherIcon "volume"
        [ Svg.polygon [ points "11 5 6 9 2 9 2 15 6 15 11 19 11 5" ] []
        ]


volume1 : Bool -> Element msg
volume1 =
    svgFeatherIcon "volume-1"
        [ Svg.polygon [ points "11 5 6 9 2 9 2 15 6 15 11 19 11 5" ] []
        , Svg.path [ d "M15.54 8.46a5 5 0 0 1 0 7.07" ] []
        ]


volume2 : Bool -> Element msg
volume2 =
    svgFeatherIcon "volume-2"
        [ Svg.polygon [ points "11 5 6 9 2 9 2 15 6 15 11 19 11 5" ] []
        , Svg.path [ d "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" ] []
        ]


volumeX : Bool -> Element msg
volumeX =
    svgFeatherIcon "volume-x"
        [ Svg.polygon [ points "11 5 6 9 2 9 2 15 6 15 11 19 11 5" ] []
        , Svg.line [ x1 "23", y1 "9", x2 "17", y2 "15" ] []
        , Svg.line [ x1 "17", y1 "9", x2 "23", y2 "15" ] []
        ]


rewind : Bool -> Element msg
rewind =
    svgFeatherIcon "rewind"
        [ Svg.polygon [ points "11 19 2 12 11 5 11 19" ] []
        , Svg.polygon [ points "22 19 13 12 22 5 22 19" ] []
        ]


fastForward : Bool -> Element msg
fastForward =
    svgFeatherIcon "fast-forward"
        [ Svg.polygon [ points "13 19 22 12 13 5 13 19" ] []
        , Svg.polygon [ points "2 19 11 12 2 5 2 19" ] []
        ]
