import "react-native-gesture-handler";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "./screen/CategoriesScreen";
import MealsOverviewScreen from "./screen/MealsOverviewScreen";
import MealDetailScreen from "./screen/MealDetailScreen";
import SafeViewAndroid from "./components/SafeViewAndroid";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screen/FavoriteScreen";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "purple",
          // height: 55,
        },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="mealsCategories"
        component={CategoriesScreen}
        options={{
          headerTitle: "Categories",
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "purple",
              // height: 55,
            },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={MyDrawer}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="mealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="mealDetail"
            component={MealDetailScreen}
            options={{ headerTitle: "Meal Detail" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
