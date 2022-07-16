import React, { FC } from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Circle, Line, Path, Rect } from "react-native-svg";
import { IconType } from "./iconType";

type ExpandIconProps = {
  style?: StyleProp<ViewStyle>;
};

const ExpandIcon: FC<ExpandIconProps> = ({ style }) => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={style}>
      <Circle cx="11" cy="11" r="11" fill="#050505" fill-opacity="0.8" />
      <Path
        d="M5.25 17C5.25 17.4142 5.58579 17.75 6 17.75L12.75 17.75C13.1642 17.75 13.5 17.4142 13.5 17C13.5 16.5858 13.1642 16.25 12.75 16.25L6.75 16.25L6.75 10.25C6.75 9.83579 6.41421 9.5 6 9.5C5.58579 9.5 5.25 9.83579 5.25 10.25L5.25 17ZM17.75 6C17.75 5.58579 17.4142 5.25 17 5.25L10.25 5.25C9.83579 5.25 9.5 5.58579 9.5 6C9.5 6.41421 9.83579 6.75 10.25 6.75H16.25V12.75C16.25 13.1642 16.5858 13.5 17 13.5C17.4142 13.5 17.75 13.1642 17.75 12.75L17.75 6ZM6.53033 17.5303L17.5303 6.53033L16.4697 5.46967L5.46967 16.4697L6.53033 17.5303Z"
        fill="#ACACAC"
      />
    </Svg>
  );
};

export default ExpandIcon;
