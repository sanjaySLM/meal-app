import React from "react";
import { Text, View, StyleSheet } from "react-native";

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, world!</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  // const routeParams = navData.route.params ? navData.route.params : {};
  return {
    headerTitle: "TEST",
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoriteScreen;
