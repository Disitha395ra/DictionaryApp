import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 
import Startpage from "./components/Startpage";
import Home from "./components/Home";
import TextTranslation from "./components/TextTranslation";
import ParagraphTranslation from "./components/ParagraphTranslation";
import VoiceTranslation from "./components/VoiceTranslation";
import GestureTranslation from "./components/GestureTranslation";
import ImageTranslation from "./components/ImageTranslation";

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
          <Stack.Screen name="TextTranslation" component={TextTranslation} />
          <Stack.Screen name="ParagraphTranslation" component={ParagraphTranslation} />
          <Stack.Screen name="VoiceTranslation" component={VoiceTranslation} />
          <Stack.Screen name="GestureTranslation" component={GestureTranslation} />
          <Stack.Screen name="ImageTranslation" component={ImageTranslation} />
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
