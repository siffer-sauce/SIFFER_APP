import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { colors } from "../../lib/colors";
import {
  AppleSDGothicNeoB,
  AppleSDGothicNeoL,
  AppleSDGothicNeoM,
} from "../../lib/fonts";
import { LinearGradient } from "expo-linear-gradient";
import CheckIcon from "../icons/CheckIcon";
import { TouchableOpacity } from "react-native-gesture-handler";

type BasketItemProps = {
  photoUrl: string;
  price: string;
  category: string;
  productName: string;
  modifyMode: boolean;
  selected: boolean;
  onPress: () => void;
};

const WIDTH = (Dimensions.get("screen").width - 20) / 2;
const HEIGHT = (WIDTH * 250) / 185;

const BasketItem: FC<BasketItemProps> = ({
  photoUrl,
  price,
  category,
  productName,
  modifyMode,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: WIDTH,
        height: HEIGHT,
        position: "relative",
        marginHorizontal: 4.5,
        marginVertical: 24,
      }}
      onPress={onPress}
    >
      <Image
        style={styles.image}
        source={{ uri: photoUrl }}
        width={WIDTH}
        height={HEIGHT}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", "transparent", "rgba(0,0,0,0.7)"]}
        style={{
          position: "absolute",
          width: WIDTH,
          height: HEIGHT,
          justifyContent: "flex-end",
          padding: 10.5,
          borderRadius: 10,
        }}
      >
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.category}>{category}</Text>
      </LinearGradient>
      {modifyMode && (
        <CheckIcon
          style={{ position: "absolute", right: 0 }}
          isChecked={selected}
        />
      )}
    </TouchableOpacity>
  );
};

export default BasketItem;

const styles = StyleSheet.create({
  image: {
    width: WIDTH,
    height: HEIGHT,
    borderRadius: 10,
  },
  price: {
    color: colors.white,
    fontFamily: AppleSDGothicNeoL,
    fontSize: 14,
  },
  productName: {
    color: colors.white,
    fontFamily: AppleSDGothicNeoB,
    fontSize: 16,
  },
  category: {
    color: colors.white,
    fontFamily: AppleSDGothicNeoM,
    fontSize: 16,
  },
});
