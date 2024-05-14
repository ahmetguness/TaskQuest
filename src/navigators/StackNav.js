import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import ParentHomeScreen from "../screens/UserHomeScreen/ParentHomeScreen/ParentHomeScreen";
import ChildHomeScreen from "../screens/UserHomeScreen/ChildHomeScreen/ChildHomeScreen";

const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ParentHomeScreen" component={ParentHomeScreen} />
      <Stack.Screen name="ChildHomeScreen" component={ChildHomeScreen} />
    </Stack.Navigator>
  );
}
