import { Animated, Easing, StyleSheet, Text, View } from "react-native";
import React, { FC, useEffect, useRef } from "react";
import { colors } from "../lib/colors";

type ChatItemProps = {
  title?: string;
  received: boolean;
  content?: JSX.Element;
};

const ChatItem: FC<ChatItemProps> = ({ title, received, content }) => {
  const fadeOpacity = useRef(new Animated.Value(0)).current;
  const fadeBottom = useRef(new Animated.Value(-20)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeOpacity, {
      toValue: 1,
      duration: 250,
      useNativeDriver: false,
      easing: Easing.bounce,
    }).start();

    Animated.timing(fadeBottom, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, []);
  return (
    <Animated.View
      style={
        received
          ? [
              styles.container,
              { opacity: fadeOpacity, bottom: fadeBottom, left: fadeBottom },
            ]
          : [
              {
                ...styles.container,
                backgroundColor: colors.blue_secondary,
                paddingRight: 16,
              },
              { opacity: fadeOpacity, bottom: fadeBottom, right: fadeBottom },
            ]
      }
    >
      <Text
        style={
          received ? styles.title : { ...styles.title, color: colors.black }
        }
      >
        {title}
      </Text>
      {content !== undefined && content}
    </Animated.View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkgray,
    paddingHorizontal: 16,
    paddingRight: 38,
    paddingVertical: 22,
    borderRadius: 16,
  },
  title: {
    color: colors.white,
    fontSize: 18,
  },
  subTitle: {
    marginTop: 8,
    color: colors.gray,
  },
});
