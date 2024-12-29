import { StyleSheet, View, ScrollView, Image } from "react-native";
import { PaperProvider } from "react-native-paper";


export default function Startpage() {
  return (
    <PaperProvider>
        <ScrollView>
            <View style={styles.container}>
            <Image source={require("../assets/startbanner.png")}
            resizeMode="contain" style={styles.bannerimage}
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
  bannerimage:{
    
  }
});
