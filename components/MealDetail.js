import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MealDetail = ({ affordability, complexity, duration }) => {
  return (
    <View style={styles.container}>
      <Text>{affordability.toUpperCase()}</Text>
      <Text>{complexity.toUpperCase()}</Text>
      <Text>{duration}min</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginVertical: 10,
  },
});

export default MealDetail;
