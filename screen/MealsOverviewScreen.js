import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../Data/dummy-data";
import MealItem from "../components/MealItem";
const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeal = MEALS.filter(
    (item) => item.categoryIds.indexOf(catId) >= 0
  );
  useLayoutEffect(() => {
    const headerTitle = CATEGORIES.find((item) => item.id === catId).title;
    navigation.setOptions({
      title: headerTitle,
    });
  }, [catId, navigation]);

  const renderMealItem = (itemData) => {
    const navigationFunction = () => {
      navigation.navigate("mealDetail", {
        mealId: itemData.item.id,
      });
    };
    return <MealItem mealItems={itemData.item} onPress={navigationFunction} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeal}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderMealItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#353935",
  },
});

export default MealsOverviewScreen;
