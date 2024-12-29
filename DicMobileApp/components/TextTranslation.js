import { StyleSheet, View, ScrollView, Image, Dimensions } from "react-native";
import { PaperProvider, Button, Text, TextInput } from "react-native-paper";
import React from "react";


export default function TextTranslation() {

  const [text, setText] = React.useState("");

  return (
    <View>
      <PaperProvider>
        <Text variant="headlineMedium">Enter Your Text Here</Text>
        <TextInput
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </PaperProvider>
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