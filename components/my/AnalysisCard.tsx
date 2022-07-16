import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import InfoIcon from "../icons/InfoIcon";
import { colors } from "../../lib/colors";
import { AppleSDGothicNeoL } from "../../lib/fonts";

type AnalysisCardProps = {
  title: string;
  onPress: () => void;
  subTitle: string;
  value: string;
  unit: string;
};

const AnalysisCard: FC<AnalysisCardProps> = ({
  title,
  onPress,
  subTitle,
  value,
  unit,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.icon}>
        <InfoIcon />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.unit}>{unit}</Text>
      </View>
    </View>
  );
};

export default AnalysisCard;

const styles = StyleSheet.create({
  text: {
    color: colors.white,
  },
  container: {
    width: "100%",
    position: "relative",
    backgroundColor: colors.darkgray,
    padding: 12,
    borderRadius: 16,
    marginVertical: 10,
  },
  icon: {
    position: "absolute",
    right: 8,
    top: 8,
    width: 21,
    height: 20,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    marginBottom: 10,
  },
  subTitle: {
    color: colors.white,
    fontSize: 14,
    fontFamily: AppleSDGothicNeoL,
  },
  valueContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "baseline",
    justifyContent: "flex-end",
  },
  value: {
    color: colors.white,
    fontSize: 50,
    fontFamily: AppleSDGothicNeoL,
  },
  unit: {
    color: colors.white,
    fontSize: 30,
    fontFamily: AppleSDGothicNeoL,
  },
});
