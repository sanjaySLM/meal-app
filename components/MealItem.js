import React from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";

const MealItem = ({ mealItems, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: "#ccc" }} onPress={onPress}>
        <Image source={{ uri: mealItems.imageUrl }} style={styles.image} />
        <Text style={styles.titleText}>{mealItems.title}</Text>
        <View style={styles.test}>
          <Text>{mealItems.affordability.toUpperCase()}</Text>
          <Text>{mealItems.complexity.toUpperCase()}</Text>
          <Text>{mealItems.duration}min</Text>
        </View>
      </Pressable>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "name",
  };
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    paddingBottom: 5,
    elevation: 5,
    overflow: "hidden",
  },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 150,
  },
  test: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});

export default MealItem;
