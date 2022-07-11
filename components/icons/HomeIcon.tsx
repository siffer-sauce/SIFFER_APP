import React from "react";
import Svg, { Line, Path } from "react-native-svg";

function HomeIcon() {
  return (
    <Svg width="26" height="25" viewBox="0 0 26 25" fill="none">
      <Path
        d="M1 24.4811V0.875H24.6061V24.4811"
        stroke="#818181"
        stroke-linecap="round"
      />
      <Line
        x1="14.96"
        y1="12.7402"
        x2="10.2434"
        y2="12.7402"
        stroke="#818181"
        stroke-linecap="round"
      />
    </Svg>
  );
}

export default HomeIcon;
