import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";

type ModalFromBottomProps = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const ModalFromBottom = () => {
  return (
    <View style={styles.container}>
      <Text>ModalFromBottom</Text>
    </View>
  );
};

export default ModalFromBottom;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    backgroundColor: "red",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    zIndex: 100,
  },
});
