import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { AppleSDGothicNeoB, AppleSDGothicNeoM } from "../lib/fonts";
import { colors } from "../lib/colors";

type BottomTabIconProps = {
  icon: JSX.Element;
  label: string;
  focused: boolean;
};

const BottomTabIcon: FC<BottomTabIconProps> = ({ icon, label, focused }) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text
        style={focused ? { ...styles.label, color: "white" } : styles.label}
      >
        {label}
      </Text>
    </View>
  );
};

export default BottomTabIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  label: {
    fontFamily: AppleSDGothicNeoM,
    color: colors.gray,
    fontSize: 14,
    marginTop: 4,
  },
});
