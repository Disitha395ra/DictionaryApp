import { StyleSheet, View, ScrollView, Image, Dimensions } from "react-native";
import { PaperProvider, Button } from "react-native-paper";

const {width, height} = Dimensions.get("window");

export default function Startpage() {
  return (
    <PaperProvider>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require("../assets/startbanner.png")}
            resizeMode="cover"
            style={styles.bannerimage}
          />
          <Button
            icon="play"
            mode="contained"
            onPress={() => console.log("Pressed")}
            style={styles.button}
          >
            Start Here
          </Button>
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
  bannerimage: {
    width: width,
    height: height,
  },
  button: {
    position: "absolute", // Make the button positioned relative to the parent
    top: height * 0.8,
    alignSelf: "center",
  },
});
