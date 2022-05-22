import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import { MEALS } from "../Data/dummy-data";
import MealDetail from "../components/MealDetail";
import Ionicons from "@expo/vector-icons/Ionicons";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const mealDetail = MEALS.find((item) => item.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Ionicons
            name="star"
            size={32}
            color="white"
            style={{ marginRight: 20 }}
          />
        );
      },
    });
  }, [navigation]);
  return (
    <View style={{ paddingVertical: 1 }}>
      <Image source={{ uri: mealDetail.imageUrl }} style={styles.image} />
      <Text style={styles.titleText}>{mealDetail.title} </Text>
      <MealDetail
        affordability={mealDetail.affordability}
        complexity={mealDetail.complexity}
        duration={mealDetail.duration}
      />
      <Text>
        <Text style={styles.headerTitle}>is Gluten Free : </Text>
        {mealDetail.isGlutenFree ? "YES" : "NO"}
      </Text>
      <View>
        <Text style={styles.headerTitle}>Incredients</Text>
        {mealDetail.ingredients.map((x, y, z) => {
          return (
            <View key={y.toString()} style={{ marginLeft: 50 }}>
              <Text>-{x}</Text>
            </View>
          );
        })}
      </View>
      <View>
        <Text style={styles.headerTitle}>Steps</Text>
        {mealDetail.steps.map((x, y, z) => {
          return (
            <View key={y.toString()} style={{ marginLeft: 50 }}>
              <Text>
                {y + 1}--{x}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  titleText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default MealDetailScreen;
