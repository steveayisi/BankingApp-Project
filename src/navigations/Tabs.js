// src/navigations/Tabs.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AccountsScreen from "../screens/AccountsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TransactionsScreen from "../screens/TransactionsScreen";
import { Feather, Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              return <Feather name={iconName} size={size} color={color} />;
            case "Transactions":
              iconName = "credit";
              return <Entypo name={iconName} size={size} color={color} />;
            case "Accounts":
              iconName = "manage-accounts";
              return (
                <MaterialIcons name={iconName} size={size} color={color} />
              );
            case "Settings":
              iconName = "settings-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      <Tab.Screen name="Accounts" component={AccountsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
