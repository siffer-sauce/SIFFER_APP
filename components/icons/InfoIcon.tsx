import React, { FC } from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Circle, Line, Path, Rect } from "react-native-svg";
import { IconType } from "./iconType";

type InfoIconProps = {
  style?: StyleProp<ViewStyle>;
};

const InfoIcon: FC<InfoIconProps> = ({ style }) => {
  return (
    <Svg width="21" height="20" viewBox="0 0 21 20" fill="none">
      <Circle cx="10" cy="10" r="10" fill="#050505" fill-opacity="0.8" />
      <Path
        d="M8.588 16H12.158V15.608L10.674 15.454H10.1L8.588 15.608V16ZM9.694 16H11.15C11.108 15.314 11.094 13.732 11.094 12.78V10.652L11.136 8.636L10.968 8.524L8.49 9.126V9.49L9.694 9.546C9.722 10.246 9.75 10.946 9.75 11.884V12.78C9.75 13.732 9.722 15.314 9.694 16ZM10.324 6.83C10.8 6.83 11.206 6.48 11.206 5.976C11.206 5.486 10.8 5.122 10.324 5.122C9.834 5.122 9.442 5.486 9.442 5.976C9.442 6.48 9.834 6.83 10.324 6.83Z"
        fill="#E3E3E3"
      />
    </Svg>
  );
};

export default InfoIcon;
