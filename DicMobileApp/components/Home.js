import { StyleSheet, View, ScrollView,  Dimensions , Image} from "react-native";
import { PaperProvider, Text, Button } from "react-native-paper";

const { width, height } = Dimensions.get("window");

export default function Home({navigation}) {
  return (
    <PaperProvider>
      <ScrollView>
        <View style={styles.container}>
          <Button
            icon="translate"
            mode="contained"
            //onPress={() => console.log("Pressed")}
            style={styles.button}
            onPress={() => navigation.navigate("Text Translation")}
          >
            Text Translation
          </Button>
          <Button
            icon="align-vertical-distribute"
            mode="contained"
            //onPress={() => console.log("Pressed")}
            style={styles.button}
            onPress={() => navigation.navigate("Paragraph Translation")}
          >
            Paragraph Translation
          </Button>
          <Button
            icon="contactless-payment"
            mode="contained"
            //onPress={() => console.log("Pressed")}
            style={styles.button}
            onPress={() => navigation.navigate("Voice Translation")}
          >
            Voice Translation
          </Button>
          <Button
            icon="debian"
            mode="contained"
            //onPress={() => console.log("Pressed")}
            style={styles.button}
            onPress={() => navigation.navigate("Gesture Translation")}
          >
            Gesture Translation
          </Button>
          <Button
            icon="camera"
            mode="contained"
            //onPress={() => console.log("Pressed")}
            style={styles.button}
            onPress={() => navigation.navigate("Image Translation")}
          >
            Capture Image
          </Button>
          <Image
            source={require("../assets/Homepagebanner.png")}
            resizeMode="cover"
            style={styles.bannerhomeimage}
          ></Image>
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
    padding: 20,
  },
  button: {
    margin: 10,
    width: width * 0.8,
    height: height * 0.1,
    justifyContent: "center",
  },
  bannerhomeimage:{
    margin: 10,
    width: width * 0.999,
    height: height * 0.2,
  }
});
