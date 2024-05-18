import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth, Chat } from "@/pages";
import { useAuth } from "@/hooks/useAuth";

const Stack = createNativeStackNavigator();

function MainNavigation(): React.JSX.Element {
  const user = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? "Auth" : "Auth"}
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Auth" component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
