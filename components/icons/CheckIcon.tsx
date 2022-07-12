import React, { FC } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import Svg, { Line, Path } from "react-native-svg";
import { IconType } from "./iconType";

type CheckIconProps = {
  isChecked: boolean;
  style: StyleProp<ViewStyle>;
};

const CheckIcon: FC<CheckIconProps> = ({ isChecked, style }) => {
  const fillColor = !isChecked ? "#B8B7B7" : "#0137BB";
  return (
    <View style={style}>
      <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <Path
          d="M12.7286 20.5823C14.8973 20.5823 16.8608 19.7032 18.282 18.282C19.7032 16.8608 20.5823 14.8973 20.5823 12.7286C20.5823 10.5599 19.7032 8.59652 18.282 7.17528C16.8608 5.75405 14.8973 4.875 12.7286 4.875C10.5599 4.875 8.59652 5.75405 7.17528 7.17528C5.75405 8.59652 4.875 10.5599 4.875 12.7286C4.875 14.8973 5.75405 16.8608 7.17528 18.282C8.59652 19.7032 10.5599 20.5823 12.7286 20.5823Z"
          fill={fillColor}
          stroke="white"
          stroke-linejoin="round"
        />
        <Path
          d="M9.58789 12.7272L11.944 15.0833L16.6562 10.3711"
          fill={fillColor}
        />
        <Path
          d="M9.58789 12.7272L11.944 15.0833L16.6562 10.3711"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export default CheckIcon;
