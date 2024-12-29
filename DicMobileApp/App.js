import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 
import Startpage from "./components/Startpage";
import Home from "./components/Home";

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator initialRouteName="Startpage">
          <Stack.Screen
            name="Startpage"
            component={Startpage}
            options={{ headerShown: false }} // Optional: Hide the header for Startpage
          />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </PaperProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
