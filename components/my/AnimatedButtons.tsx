import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../lib/colors";
import { AppleSDGothicNeoB } from "../../lib/fonts";

type AnimatedButtonsProps = {
  current: string;
  setCurrent: Dispatch<SetStateAction<string>>;
};

const barWidth = (Dimensions.get("screen").width - 20) / 3;

const AnimatedButtons: FC<AnimatedButtonsProps> = ({ current, setCurrent }) => {
  const barLeftPosition = useRef(new Animated.Value(0)).current;

  const moveBar = (steps: number) => {
    Animated.timing(barLeftPosition, {
      toValue: barWidth * steps,
      duration: 250,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  useEffect(() => {
    switch (current) {
      case "mySize":
        return moveBar(0);
      case "basket":
        return moveBar(1);
      case "record":
        return moveBar(2);
    }
  }, [current]);

  return (
    <>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCurrent("mySize")}
        >
          <Text
            style={
              current === "mySize"
                ? styles.buttonTextSelected
                : styles.buttonText
            }
          >
            MY SIZE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCurrent("basket")}
        >
          <Text
            style={
              current === "basket"
                ? styles.buttonTextSelected
                : styles.buttonText
            }
          >
            BASKET
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCurrent("record")}
        >
          <Text
            style={
              current === "record"
                ? styles.buttonTextSelected
                : styles.buttonText
            }
          >
            RECORD
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.barContainer}>
        <Animated.View
          style={[styles.bar, { left: barLeftPosition }]}
        ></Animated.View>
      </View>
    </>
  );
};

export default AnimatedButtons;

const styles = StyleSheet.create({
  buttonText: {
    color: colors.gray,
    fontFamily: AppleSDGothicNeoB,
    fontSize: 16,
    fontWeight: "500",
  },
  buttonTextSelected: {
    color: "white",
    fontFamily: AppleSDGothicNeoB,
    fontSize: 17,
    fontWeight: "500",
  },
  buttonContainer: {
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 30,
  },
  button: {
    padding: 20,
  },
  barContainer: {
    width: Dimensions.get("screen").width,
    paddingHorizontal: 10,
  },
  bar: {
    backgroundColor: "white",
    height: 2,
    width: barWidth,
    borderRadius: 100,
  },
});
