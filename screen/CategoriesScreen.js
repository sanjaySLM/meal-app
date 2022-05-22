import React from "react";
import { Text, View, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../Data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const renderItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("mealsOverview", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <View style={{ backgroundColor: "white" }}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
