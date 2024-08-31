import * as React from "react";
import { Appbar } from "react-native-paper";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const AppBarrComp = () => {
  const navigation = useNavigation();

  const barStatus = useSelector((state) => {
    return state.bar;
  });
  const _goBack = () => {
    console.log(navigation, "asd");
    navigation.navigate("Home");
  };

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <Appbar.Header>
      {barStatus.title === "Categories" ? null : (
        <Appbar.BackAction onPress={_goBack} />
      )}

      <Appbar.Content title={barStatus.title} />
    </Appbar.Header>
  );
};

export default AppBarrComp;
