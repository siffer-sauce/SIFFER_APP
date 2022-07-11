import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../lib/colors";
import { useNavigation } from "@react-navigation/native";
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

const Tab = createBottomTabNavigator();

function BottomTabs() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colors.black, height: 100 },
        tabBarButton: (props) => <TouchableOpacity {...props} />,
      }}
    >
      <Tab.Screen
        name="Home"
        children={() => <Home />}
        options={{
          tabBarIcon: ({ focused }) => {
            return <HomeIcon />;
          },
        }}
      />
      <Tab.Screen
        name="Recommendation"
        children={() => <Recommendation />}
        options={{
          tabBarIcon: ({ focused }) => {
            return <RecommendationIcon />;
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
                <SearchIcon />
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
            return <LoungeIcon />;
          },
        }}
      />
      <Tab.Screen
        name="My"
        component={My}
        options={{
          tabBarIcon: ({ focused }) => {
            return <MyIcon />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
