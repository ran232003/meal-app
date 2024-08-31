import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const MealCard = (props) => {
  const navigation = useNavigation();

  const { meal } = props;
  const handleClick = () => {
    console.log("click");
    navigation.navigate("MealDetails", {
      meal: meal,
    });
  };
  return (
    <TouchableOpacity onPress={handleClick}>
      <Card style={styles.cardMain}>
        <Card.Content>
          <Text variant="titleLarge">{meal.title}</Text>
          <View style={styles.row}>
            <Text variant="bodyMedium">{meal.duration}m</Text>
            <Text variant="bodyMedium" style={styles.spacer}>
              •
            </Text>
            <Text variant="bodyMedium">{meal.complexity}</Text>
            <Text variant="bodyMedium" style={styles.spacer}>
              •
            </Text>
            <Text variant="bodyMedium">{meal.affordability}</Text>
          </View>
        </Card.Content>
        <Card.Cover source={{ uri: meal.imageUrl }} />
      </Card>
    </TouchableOpacity>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  cardMain: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 8,
    justifyContent: "center",
    marginBottom: 10,
  },
  spacer: {
    marginHorizontal: 8, // Adjust this to increase or decrease space between the elements
  },
});
