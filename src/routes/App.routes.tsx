import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import CreateRecipe from "../screens/CreateRecipe";

const Stack = createStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateRecipe"
          component={CreateRecipe}
          options={{
            headerTitleAlign: "center",
            headerTitle: "create recipe",
            headerTitleStyle: {
              fontFamily: "Lexend_700Bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
