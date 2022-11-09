import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import bai01 from "./screens/bai01";
import bai02 from "./screens/bai02";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="bai01" component={bai01} />
        {/* <Stack.Screen name="bai02" component={bai02} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
