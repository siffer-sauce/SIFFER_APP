import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { FC, useState } from "react";
import { colors } from "../../lib/colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import AnimatedButtons from "../../components/my/AnimatedButtons";
import { AppleSDGothicNeoB } from "../../lib/fonts";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../RootStackParams";
import Basket from "../../components/my/Basket";
import MySize from "../../components/my/MySize";

type BottomTabNavigationProp = StackNavigationProp<
  RootStackParams,
  "BottomTabs"
>;

type MyProps = {
  stackNavigation: BottomTabNavigationProp;
};

const My: FC<MyProps> = ({ stackNavigation }) => {
  const [current, setCurrent] = useState("mySize");
  return (
    <ScrollView
      style={{
        backgroundColor: colors.black,
        minHeight: Dimensions.get("screen").height,
      }}
    >
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/mySize.png")}
          width={Dimensions.get("screen").width}
        />
        <View style={styles.headerInner}>
          <View style={styles.headerTop}>
            <TouchableOpacity
              onPress={() => stackNavigation.navigate("Settings")}
            >
              <Ionicons name="settings-sharp" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.headerBottom}>
            <TouchableOpacity>
              <View style={styles.circle}></View>
            </TouchableOpacity>
            <Text style={styles.name}>남현</Text>
            <Text style={styles.email}>minsu0523@naver.com</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>프로필 편집</Text>
        </View>
      </TouchableOpacity>
      <AnimatedButtons current={current} setCurrent={setCurrent} />
      {current === "mySize" ? <MySize /> : current === "basket" && <Basket />}
    </ScrollView>
  );
};

export default My;

const styles = StyleSheet.create({
  header: {
    position: "relative",
    marginBottom: 20,
  },
  headerInner: {
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  headerTop: {
    marginTop: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  headerBottom: {
    marginTop: 40,
    paddingHorizontal: 10,
    width: "100%",
    alignItems: "center",
  },
  circle: {
    top: -10,
    backgroundColor: colors.blue_secondary,
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    color: "white",
    fontWeight: "700",
    fontSize: 24,
  },
  email: {
    marginTop: 10,
    color: colors.gray,
  },
  button: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 16,
    margin: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 16,
    fontFamily: AppleSDGothicNeoB,
  },
});
