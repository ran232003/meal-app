import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MealCard from "../components/MealCard";

export default function Favorites(props) {
  const { favorites, setFavorites } = props;
  console.log(favorites, "favorites");
  return (
    <FlatList
      style={styles.addTaskView}
      data={favorites}
      renderItem={({ item }) => <MealCard meal={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  addTaskView: {
    flex: 1,
    backgroundColor: "#3f2f25",
    padding: 10,
  },
});
