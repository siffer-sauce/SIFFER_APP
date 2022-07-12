import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View } from "react-native";
import { colors } from "../../lib/colors";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Home from "./Home";
import Recommendation from "./Recommendation";
import Search from "./Search";
import Lounge from "./Lounge";
import My from "./My";
import HomeIcon from "../../components/icons/HomeIcon";
import LoungeIcon from "../../components/icons/LoungeIcon";
import MyIcon from "../../components/icons/MyIcon";
import RecommendationIcon from "../../components/icons/RecommendationIcon";
import SearchIcon from "../../components/icons/SearchIcon";
import BottomTabIcon from "../../components/BottomTabIcon";
import { StackParams } from "../../Navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../RootStackParams";

const Tab = createBottomTabNavigator();
type BottomTabNavigationProp = StackNavigationProp<
  RootStackParams,
  "BottomTabs"
>;

function BottomTabs() {
  const navigation = useNavigation<BottomTabNavigationProp>();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.black,
          height: 100,
          borderTopWidth: 0,
        },
        tabBarButton: (props) => <TouchableOpacity {...props} />,
      }}
    >
      <Tab.Screen
        name="Home"
        children={() => <Home />}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <BottomTabIcon
                focused={focused}
                icon={<HomeIcon color={focused ? "white" : "#818181"} />}
                label="홈"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Recommendation"
        children={() => <Recommendation />}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <BottomTabIcon
                focused={focused}
                icon={
                  <RecommendationIcon color={focused ? "white" : "#818181"} />
                }
                label="추천"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  position: "absolute",
                  width: 90,
                  height: 90,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colors.black,
                  borderRadius: 45,
                }}
              >
                <BottomTabIcon
                  focused={focused}
                  icon={<SearchIcon color={focused ? "white" : "#818181"} />}
                  label="검색"
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Lounge"
        children={() => <Lounge />}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <BottomTabIcon
                focused={focused}
                icon={<LoungeIcon color={focused ? "white" : "#818181"} />}
                label="라운지"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="My"
        children={() => <My stackNavigation={navigation} />}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <BottomTabIcon
                focused={focused}
                icon={<MyIcon color={focused ? "white" : "#818181"} />}
                label="마이"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
