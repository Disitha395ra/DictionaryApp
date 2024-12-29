import { StyleSheet, View, ScrollView } from "react-native";
import { PaperProvider, Text } from "react-native-paper";


export default function Startpage() {
  return (
    <PaperProvider>
        <ScrollView>
            <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            </View>
        </ScrollView>
    </PaperProvider>
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
