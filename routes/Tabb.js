import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from '@react-navigation/drawer';
import React from "react";
import CalculateScreen from "../screens/CalculateScreen";
import HomeScreen from "../screens/HomeScreen";
import Profile from "./Profile";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

// const Drawer = createDrawerNavigator();

const Tabb = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Convert") {
            iconName = focused ? "sync" : "sync-outline";
          } else if (route.name === "About") {
            iconName = focused ? "bookmarks" : "bookmarks-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "man" : "man-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Convert" component={CalculateScreen} />
      <Tab.Screen name="About" component={HomeScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>

    // <Drawer.Navigator initialRouteName="Konversi">
    //   <Drawer.Screen name="Konversi" component={CalculateScreen} />
    //   <Drawer.Screen name="Teori" component={HomeScreen} />
    //   <Drawer.Screen name="Profil" component={Profile} />
    // </Drawer.Navigator>
  );
};

export default Tabb;
