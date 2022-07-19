import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Render3D from "./screens/Render3D";
import Register from "./screens/register/Register";
import BottomTabs from "./screens/BottomTabs/BottomTabs";
import Settings from "./screens/Settings";
import MySizeModal from "./screens/BottomTabs/MySizeModal";
const Stack = createStackNavigator();

export type StackParams = {
  [key: string]: { name: string };
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Render3D" component={Render3D} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen
          name="MySizeModal"
          component={MySizeModal}
          options={{
            presentation: "transparentModal",
            animationEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
