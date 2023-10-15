import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { BottomTabData } from "../utils/BottomTabData";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

interface BottomTabDataProps {
  title: string;
  icon: any;
  id: number;
  component: () => React.JSX.Element;
}
const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Post"
      backBehavior="initialRoute"
      screenOptions={{ headerShown: false }}
    >
      {/* map through an array of navigator items */}
      {BottomTabData.map(
        ({ title, icon, id, component }: BottomTabDataProps) => (
          <Tab.Screen
            key={id}
            name={title}
            listeners={{
              tabPress: (e) => {
                e.preventDefault(); // <-- this function blocks navigating to screen
              },
            }}
            component={component}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name={icon} color={color} size={26} />
              ),
            }}
          />
        )
      )}
    </Tab.Navigator>
  );
};

export default BottomTabNav;
