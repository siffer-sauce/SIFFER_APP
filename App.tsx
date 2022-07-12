import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

const customFonts = {
  AppleSDGothicNeoB: require("./assets/fonts/AppleSDGothicNeoB.ttf"),
  AppleSDGothicNeoEB: require("./assets/fonts/AppleSDGothicNeoEB.ttf"),
  AppleSDGothicNeoH: require("./assets/fonts/AppleSDGothicNeoH.ttf"),
  AppleSDGothicNeoL: require("./assets/fonts/AppleSDGothicNeoL.ttf"),
  AppleSDGothicNeoM: require("./assets/fonts/AppleSDGothicNeoM.ttf"),
  AppleSDGothicNeoR: require("./assets/fonts/AppleSDGothicNeoR.ttf"),
  AppleSDGothicNeoSB: require("./assets/fonts/AppleSDGothicNeoSB.ttf"),
  AppleSDGothicNeoT: require("./assets/fonts/AppleSDGothicNeoT.ttf"),
  AppleSDGothicNeoUL: require("./assets/fonts/AppleSDGothicNeoUL.ttf"),
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync(customFonts);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      (async () => {
        await SplashScreen.hideAsync();
      })();
    }
  }, [isLoading]);

  return (
    <>
      <Navigation />
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
