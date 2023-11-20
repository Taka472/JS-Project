import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Screen01 from "./components/Home";
import Screen02 from "./components/Detail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="1">
        <Stack.Screen name="1" component={Screen01} options={{ headerShown: false }} />
        <Stack.Screen name="2" component={Screen02} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}