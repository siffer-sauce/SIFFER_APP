import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC } from "react";
import { colors } from "../../lib/colors";
import Avatar3D from "../../assets/images/Avatar3D.png";
import { LinearGradient } from "expo-linear-gradient";
import ExpandIcon from "../icons/ExpandIcon";
import {
  AppleSDGothicNeoB,
  AppleSDGothicNeoM,
  AppleSDGothicNeoUL,
} from "../../lib/fonts";
import AvatarCard from "./AvatarCard";
import AnalysisCard from "./AnalysisCard";
import ModalFromBottom from "../ModalFromBottom";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../screens/RootStackParams";

const WIDTH = Dimensions.get("screen").width - 20;
const HEIGHT = (WIDTH * 250) / 185;

type BottomTabNavigationProp = StackNavigationProp<
  RootStackParams,
  "BottomTabs"
>;
type MySizeProps = {
  stackNavigation: BottomTabNavigationProp;
};

const MySize: FC<MySizeProps> = ({ stackNavigation }) => {
  return (
    <>
      {/* <ModalFromBottom /> */}
      <View style={styles.container}>
        <View>
          <Text style={styles.lightText}>최근 업데이트 : 06.03</Text>
          <Text style={styles.boldText}>남현님의 바디 사이즈</Text>
          <View style={styles.menu}>
            <Text style={styles.text}>My Body Size</Text>
            <TouchableOpacity>
              <Text style={styles.buttonText}>편집하기</Text>
            </TouchableOpacity>
          </View>
          <AvatarCard onPress={() => stackNavigation.navigate("MySizeModal")} />
        </View>
        <View style={{ marginVertical: 40 }}>
          <Text style={styles.lightText}>
            나의 체형 분석 리포트를 받아보세요
          </Text>
          <Text style={styles.boldText}>AI 분석 리포트</Text>
          <Text style={{ ...styles.text, marginBottom: 10 }}>
            AI Body Analysis
          </Text>
          <AnalysisCard
            title="신체질량지수(BMI)"
            subTitle="표준 체중"
            value="18.5"
            unit="kg/m²"
            onPress={() => {}}
          />
          <AnalysisCard
            title="체지방률(RFM)"
            subTitle="운동선수"
            value="14"
            unit="%"
            onPress={() => {}}
          />
          <AnalysisCard
            title="신체 나이"
            subTitle="-2세"
            value="23.5"
            unit="세"
            onPress={() => {}}
          />
          <AnalysisCard
            title="기초 대사랑"
            subTitle="평균"
            value="1616"
            unit="Kcal"
            onPress={() => {}}
          />
        </View>
        <View>
          <Text style={styles.lightText}>나의 체형 변화를 확인해보세요</Text>
          <Text style={styles.boldText}>신체 치수 기록 그래프</Text>
          <Text style={styles.text}>Body Size Record</Text>
        </View>
      </View>
    </>
  );
};

export default MySize;

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    paddingHorizontal: 4,
    paddingBottom: 100,
  },
  text: {
    fontFamily: AppleSDGothicNeoM,

    color: colors.white,
    fontSize: 20,
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
});
