import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={styles.butonCointainer}
        onPress={onPress}
      >
        <View style={styles.innerCointainer}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    height: 150,
    elevation: 5,
    overflow: "hidden",
    borderRadius: 15,
  },
  butonCointainer: {
    flex: 1,
  },
  innerCointainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export const screenOptions = (navData) => {
  return {
    headerTitle: "routeParams.name",
  };
};
export default CategoryGridTile;
