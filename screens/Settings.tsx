import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppleSDGothicNeoB } from "../lib/fonts";

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Settings</Text>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontFamily: AppleSDGothicNeoB,
    fontSize: 20,
    fontWeight: "700",
  },
});
