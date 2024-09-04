import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import MealCard from "../components/MealCard";
import DetailsList from "../components/DetailsList";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";

const MealDetails = (props) => {
  const route = useRoute();
  const { meal } = route.params;
  //   const favorites = useSelector((state) => {
  //     state.favorite.favorites;
  //   });
  const { favorites, setFavorites } = props;
  const id = favorites.find((mealItem) => mealItem.id === meal.id);

  const [iconColor, setIconColor] = useState(id ? "red" : "black"); // Initial color is black
  console.log(id, "id", iconColor);
  // Extract the parameters from route.params

  //   console.log(meal);
  const navigation = useNavigation();

  const handleFavoriteToggle = () => {
    const id = favorites.find((mealItem) => mealItem.id === meal.id);
    if (id) {
      console.log("if yes remove");
      setFavorites(favorites.filter((mealItem) => mealItem.id !== meal.id));
      setIconColor("black");
    } else {
      console.log("else add");
      setFavorites([...favorites, meal]);
      setIconColor("red");
    }
  };
  useLayoutEffect(() => {
    //set up the status bar
    navigation.setOptions({
      headerRight: () => {
        return (
          <Button
            textColor={iconColor}
            icon={"cards-heart-outline"}
            onPress={handleFavoriteToggle}
          ></Button>
        );
      },
    });
  }, [navigation, iconColor]);
  return (
    <View style={styles.addTaskView}>
      <MealCard meal={meal} flag={true} />
      <DetailsList data={meal.ingredients} title={"Ingredients"} />
      <DetailsList data={meal.steps} title={"Steps"} />
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  addTaskView: {
    flex: 1,
    backgroundColor: "#3f2f25",
    padding: 10,
  },
});
