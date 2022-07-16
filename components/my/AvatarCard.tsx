import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Avatar3D from "../../assets/images/Avatar3D.png";
import { LinearGradient } from "expo-linear-gradient";
import ExpandIcon from "../icons/ExpandIcon";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = (WIDTH * 505) / 369;

const AvatarCard = () => {
  return (
    <View style={{ position: "relative", alignItems: "center", marginTop: 20 }}>
      <LinearGradient
        colors={["#30955C", "#206940", "#206940"]}
        style={{
          position: "relative",
          width: WIDTH,
          height: HEIGHT,
          justifyContent: "flex-end",
          padding: 10.5,
          borderRadius: 10,
        }}
      >
        <Image source={Avatar3D} />
        <TouchableOpacity
          style={{ position: "absolute", bottom: 20, right: 16 }}
        >
          <ExpandIcon />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default AvatarCard;

const styles = StyleSheet.create({});
