import { FlatList, StyleSheet, View } from "react-native";
import React, { useLayoutEffect } from "react";
import CatagoryItem from "../components/CatagoryItem";
import { CATEGORIES, MEALS } from "../data/dummy";
import { useNavigation, useRoute } from "@react-navigation/native";
import MealCard from "../components/MealCard";

const Meals = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const categoryTitle = route.params?.categoryTitle; //take the value from category

  useLayoutEffect(() => {
    //set up the status bar
    navigation.setOptions({
      title: categoryTitle || "Meals",
    });
  }, [navigation, categoryTitle]);

  return (
    <FlatList
      style={styles.addTaskView}
      data={MEALS}
      renderItem={({ item }) => <MealCard meal={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Meals;

const styles = StyleSheet.create({
  addTaskView: {
    flex: 1,
    backgroundColor: "#3f2f25",
    padding: 10,
  },
});
