import { Animated, Easing, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { colors } from "../lib/colors";

const ChatLoading = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animatedValue2 = useRef(new Animated.Value(0)).current;
  const animatedValue3 = useRef(new Animated.Value(0)).current;

  const biggerValue = 24;
  const smallerValue = 16;
  const DURATION = 500;

  const bigger = () => {
    Animated.timing(animatedValue, {
      toValue: biggerValue,
      duration: DURATION,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
    setTimeout(() => {
      Animated.timing(animatedValue2, {
        toValue: biggerValue,
        duration: DURATION,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start();
    }, DURATION);
    setTimeout(() => {
      Animated.timing(animatedValue3, {
        toValue: biggerValue,
        duration: DURATION,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start();
    }, DURATION * 2);
  };
  const smaller = () => {
    Animated.timing(animatedValue, {
      toValue: smallerValue,
      duration: DURATION,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
    setTimeout(() => {
      Animated.timing(animatedValue2, {
        toValue: smallerValue,
        duration: DURATION,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start();
    }, DURATION);
    setTimeout(() => {
      Animated.timing(animatedValue3, {
        toValue: smallerValue,
        duration: DURATION,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start();
    }, DURATION * 2);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      bigger();
      setTimeout(() => {
        smaller();
      }, DURATION);
    }, DURATION * 3);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[{ color: colors.black }, { fontSize: animatedValue }]}
      >
        ⦁
      </Animated.Text>
      <Animated.Text
        style={[{ color: colors.black }, { fontSize: animatedValue2 }]}
      >
        ⦁
      </Animated.Text>
      <Animated.Text
        style={[{ color: colors.black }, { fontSize: animatedValue3 }]}
      >
        ⦁
      </Animated.Text>
    </View>
  );
};

export default ChatLoading;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue_secondary,
    paddingHorizontal: 32,
    paddingVertical: 22,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 70,
  },
});
