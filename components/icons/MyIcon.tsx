import React from "react";
import Svg, { Line, Path, Rect } from "react-native-svg";

function MyIcon() {
  return (
    <Svg width="26" height="25" viewBox="0 0 26 25" fill="none">
      <Path
        d="M1.11426 23.8378V12.5762H25.1239V23.8378"
        stroke="#818181"
        stroke-linecap="round"
      />
      <Line
        x1="13.0479"
        y1="0.5"
        x2="13.0479"
        y2="5.21659"
        stroke="#818181"
        stroke-linecap="round"
      />
    </Svg>
  );
}

export default MyIcon;
