import React, { FC } from "react";
import Svg, { Line, Path, Rect } from "react-native-svg";
import { IconType } from "./iconType";

const LoungeIcon: FC<IconType> = ({ color }) => {
  return (
    <Svg width="27" height="24" viewBox="0 0 27 24" fill="none">
      <Rect
        x="0.974609"
        y="0.5"
        width="24.6261"
        height="22.576"
        rx="0.5"
        stroke={color}
      />
      <Line
        x1="7.07617"
        y1="8.48047"
        x2="19.4994"
        y2="8.48047"
        stroke={color}
        stroke-linecap="round"
      />
      <Line
        x1="7.07617"
        y1="11.8496"
        x2="19.4994"
        y2="11.8496"
        stroke={color}
        stroke-linecap="round"
      />
      <Line
        x1="7.07617"
        y1="15.2168"
        x2="19.4994"
        y2="15.2168"
        stroke={color}
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default LoungeIcon;
