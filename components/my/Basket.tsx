import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  AppleSDGothicNeoB,
  AppleSDGothicNeoM,
  AppleSDGothicNeoUL,
} from "../../lib/fonts";
import { colors } from "../../lib/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import BasketItem from "./BasketItem";

type ProductType = {
  photoUrl: string;
  price: string;
  category: string;
  productName: string;
};

const DATA: Array<ProductType> = [
  {
    photoUrl:
      "https://cdn-images.farfetch-contents.com/18/03/85/10/18038510_40443069_1000.jpg",
    price: "58,000",
    productName: "Pattern skirt",
    category: "올디너리",
  },
  {
    photoUrl:
      "https://cdn-images.farfetch-contents.com/18/03/85/10/18038510_40443069_1000.jpg",
    price: "58,000",
    productName: "Pattern skirt",
    category: "올디너리",
  },
  {
    photoUrl:
      "https://cdn-images.farfetch-contents.com/18/03/85/10/18038510_40443069_1000.jpg",
    price: "58,000",
    productName: "Pattern skirt",
    category: "올디너리",
  },
  {
    photoUrl:
      "https://cdn-images.farfetch-contents.com/18/03/85/10/18038510_40443069_1000.jpg",
    price: "58,000",
    productName: "Pattern skirt",
    category: "올디너리",
  },
  {
    photoUrl:
      "https://cdn-images.farfetch-contents.com/18/03/85/10/18038510_40443069_1000.jpg",
    price: "58,000",
    productName: "Pattern skirt",
    category: "올디너리",
  },
  {
    photoUrl:
      "https://cdn-images.farfetch-contents.com/18/03/85/10/18038510_40443069_1000.jpg",
    price: "58,000",
    productName: "Pattern skirt",
    category: "올디너리",
  },
  {
    photoUrl:
      "https://cdn-images.farfetch-contents.com/18/03/85/10/18038510_40443069_1000.jpg",
    price: "58,000",
    productName: "Pattern skirt",
    category: "올디너리",
  },
  {
    photoUrl:
      "https://cdn-images.farfetch-contents.com/18/03/85/10/18038510_40443069_1000.jpg",
    price: "58,000",
    productName: "Pattern skirt",
    category: "올디너리",
  },
  {
    photoUrl:
      "https://cdn-images.farfetch-contents.com/18/03/85/10/18038510_40443069_1000.jpg",
    price: "58,000",
    productName: "Pattern skirt",
    category: "올디너리",
  },
];

const Basket = () => {
  const [modifyMode, setModifyMode] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.lightText}>최근 업데이트 06:03</Text>
      <Text style={styles.boldText}>관심 아이템</Text>
      <View style={styles.menu}>
        <Text style={styles.semiBoldText}>Wish Item</Text>
        <TouchableOpacity
          onPress={() => {
            setModifyMode((prev) => !prev);
          }}
        >
          <Text style={styles.buttonText}>편집하기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {DATA.map((item, i) => {
          return (
            <BasketItem
              key={i}
              photoUrl={item.photoUrl}
              price={item.price}
              productName={item.productName}
              category={item.category}
              modifyMode={modifyMode}
              selected={true}
              onPress={() => {
                setModifyMode((prev) => !prev);
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Basket;

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    paddingHorizontal: 4,
  },
  lightText: {
    fontFamily: AppleSDGothicNeoUL,
    color: colors.gray,
    fontSize: 16,
    fontWeight: "100",
  },
  boldText: {
    fontFamily: AppleSDGothicNeoB,
    color: colors.white,
    fontSize: 24,
  },
  semiBoldText: {
    fontFamily: AppleSDGothicNeoB,
    color: colors.gray,
    fontSize: 20,
  },
  buttonText: {
    fontFamily: AppleSDGothicNeoM,
    color: colors.white,
    fontSize: 14,
    fontWeight: "100",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: Dimensions.get("screen").width,
    paddingBottom: 100,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
