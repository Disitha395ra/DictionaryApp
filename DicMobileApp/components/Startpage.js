import { StyleSheet, View, ScrollView, Image, Dimensions } from "react-native";
import { PaperProvider } from "react-native-paper";

const {width, height} = Dimensions.get("window");

export default function Startpage() {
  return (
    <PaperProvider>
        <ScrollView>
            <View style={styles.container}>
            <Image source={require("../assets/startbanner.png")}
            resizeMode="cover" style={styles.bannerimage}
            />
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
    width: width , 
    height: height ,
  },
});
