import { Animated, Dimensions, View } from "react-native";
import React, { FC, useEffect, useRef } from "react";
import Avatar3D from "../../assets/images/Avatar3D.png";
import { LinearGradient } from "expo-linear-gradient";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = (WIDTH * 505) / 369;

const IMAGE_WIDTH = 369;
const IMAGE_HEIGHT = 505;

const AnimatedAvatarCard: FC = () => {
  const viewWidthValue = useRef(new Animated.Value(0)).current;
  const viewHeightValue = useRef(new Animated.Value(0)).current;

  const imageWidthValue = useRef(new Animated.Value(0)).current;
  const imageHeightValue = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(viewWidthValue, {
      toValue: WIDTH,
      duration: 300,
      useNativeDriver: false,
    }).start();
    Animated.timing(viewHeightValue, {
      toValue: HEIGHT,
      duration: 300,
      useNativeDriver: false,
    }).start();
    Animated.timing(imageWidthValue, {
      toValue: IMAGE_WIDTH,
      duration: 300,
      useNativeDriver: false,
    }).start();
    Animated.timing(imageHeightValue, {
      toValue: IMAGE_HEIGHT,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <View style={{ position: "relative", alignItems: "center", marginTop: 20 }}>
      <Animated.View
        style={[{ width: viewWidthValue, height: viewHeightValue }]}
      >
        <LinearGradient
          colors={["#30955C", "#206940", "#206940"]}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            justifyContent: "flex-end",
            padding: 10.5,
            borderRadius: 10,
          }}
        >
          <Animated.Image
            source={Avatar3D}
            style={[{ width: imageWidthValue, height: imageHeightValue }]}
          />
        </LinearGradient>
      </Animated.View>
    </View>
  );
};

export default AnimatedAvatarCard;
