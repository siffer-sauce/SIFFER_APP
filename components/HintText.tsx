import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

type HintTextProps = {
  text: string;
  onPress: () => {};
};

const HintText: FC<HintTextProps> = ({ text }) => {
  return (
    <View>
      <Text>HintText</Text>
    </View>
  );
};

export default HintText;

const styles = StyleSheet.create({});
