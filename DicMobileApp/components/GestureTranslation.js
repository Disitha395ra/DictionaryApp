import { StyleSheet, View, ScrollView, Image, Dimensions } from "react-native";
import { PaperProvider, Button,Text } from "react-native-paper";
export default function GestureTranslation() {
  return (
    <View>
      <Text>Gesture Translation</Text>
    </View>
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
