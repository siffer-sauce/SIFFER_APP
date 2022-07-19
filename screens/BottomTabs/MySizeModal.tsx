import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AvatarCard from "../../components/my/AvatarCard";
import AnimatedAvatarCard from "../../components/my/AnimatedAvatarCard";

const MySizeModal = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        ]}
        onPress={navigation.goBack}
      />

      <AnimatedAvatarCard />
    </View>
  );
};

export default MySizeModal;

const styles = StyleSheet.create({});
