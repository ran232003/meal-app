import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { barAction } from "../store/barSlice";

const CatagoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(barAction.setTitle(category.title));
    navigation.navigate("Meals", { categoryTitle: category.title }); //sending title value to meal
  };
  return (
    <TouchableOpacity
      style={[styles.categoryContainer, { backgroundColor: category.color }]}
      onPress={handleClick}
    >
      <View
        style={[styles.categoryContainer, { backgroundColor: category.color }]}
      >
        <Text style={styles.categoryTitle}>{category.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CatagoryItem;

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    aspectRatio: 1, // Ensure the view is square
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 5, // Adjust spacing between items if needed
  },
  categoryTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});
