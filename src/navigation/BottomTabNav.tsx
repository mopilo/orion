import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { BottomTabData } from "../utils/BottomTabData";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();

const BottomTabNav = () => {

  return (
    <Tab.Navigator initialRouteName="Post" backBehavior="initialRoute" screenOptions={{headerShown: false}}>
      {BottomTabData.map(({ title, icon, id, component }) => (
        <Tab.Screen
          key={id}
          name={title}
          component={component}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name={icon} color={color} size={26} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNav;
