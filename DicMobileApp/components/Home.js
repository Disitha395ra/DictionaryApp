import { StyleSheet, View, ScrollView,  Dimensions } from "react-native";
import { PaperProvider, Text } from "react-native-paper";

const { width, height } = Dimensions.get("window");

export default function Home() {
  return (
    <PaperProvider>
      <ScrollView>
        <View style={styles.container}>
          <Text></Text>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4b0082",
    alignItems: "center",
    justifyContent: "center",
  },
});
