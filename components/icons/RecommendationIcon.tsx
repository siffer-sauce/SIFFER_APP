import React, { FC } from "react";
import Svg, { Line, Path, Rect } from "react-native-svg";
import { IconType } from "./iconType";

const RecommendationIcon: FC<IconType> = ({ color }) => {
  return (
    <Svg width="26" height="25" viewBox="0 0 26 25" fill="none">
      <Line
        x1="12.9336"
        y1="14.3594"
        x2="12.9336"
        y2="24.0757"
        stroke={color}
        stroke-linecap="round"
      />
      <Path
        d="M1 0.99974V13.8594H25.0097V0.99974"
        stroke={color}
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default RecommendationIcon;
