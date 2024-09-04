import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Categories from "./screens/Categories";
import AppBarrComp from "./components/AppBarComp";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Meals from "./screens/Meals";
import MealDetails from "./screens/MealDetails";
import { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favorites from "./screens/Favorites";

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const Stack = createNativeStackNavigator();
  //nested navigation
  const Drawer = createDrawerNavigator();

  function MyDrawer() {
    return (
      <Drawer.Navigator
        screenOptions={{
          sceneContainerStyle: { backgroundColor: "#3f2f25" },
          drawerContentStyle: { backgroundColor: "#FFDBB5" },
          drawerActiveBackgroundColor: { backgroundColor: "#3f2f25" },
        }}
      >
        <Drawer.Screen name="Home" component={Categories} />
        <Drawer.Screen name="Favorites">
          {(props) => (
            <Favorites
              {...props}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.container}>
        <View style={styles.container}>
          <NavigationContainer>
            {/* <AppBarrComp /> */}
            <Stack.Navigator initialRouteName="Home">
              {/* <Stack.Screen name="Home" component={Categories} /> */}
              {/* nested nav */}
              <Stack.Screen
                name="Drawer"
                component={MyDrawer}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Meals" component={Meals} />
              {/* <Stack.Screen
                name="MealDetails"
                component={MealDetails}
                options={{
                  headerRight: () => {
                    return <Text>test</Text>;
                  },
                }}
              /> */}
              <Stack.Screen name="MealDetails">
                {(props) => (
                  <MealDetails
                    {...props}
                    favorites={favorites}
                    setFavorites={setFavorites}
                  />
                )}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f2f25", // alignItems: 'center',
    // justifyContent: 'center',
  },
});
