import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const DetailsList = (props) => {
  const { data, title } = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.itemText}>{item}</Text>}
      />
    </View>
  );
};

export default DetailsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: "white",
    marginBottom: 10,
  },
  list: {
    width: "100%",
  },
  itemText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5, // Space between items
  },
});
