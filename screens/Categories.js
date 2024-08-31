import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import CatagoryItem from "../components/CatagoryItem";
import { CATEGORIES } from "../data/dummy";

const Categories = ({ navigation }) => {
  return (
    <FlatList
      style={styles.addTaskView}
      data={CATEGORIES}
      renderItem={({ item }) => (
        <CatagoryItem navigation={navigation} category={item} />
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2} // Display 2 items per row
      columnWrapperStyle={styles.row} // Style to wrap each row
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  addTaskView: {
    flex: 1,
    backgroundColor: "#3f2f25",
    padding: 10,
  },
  row: {
    justifyContent: "space-between", // Space between items in a row
    marginBottom: 10, // Space between rows
  },
});
