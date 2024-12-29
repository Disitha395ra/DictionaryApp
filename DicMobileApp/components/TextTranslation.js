import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function TextTranslation() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [inputLanguage, setInputLanguage] = useState("en");
  const [outputLanguage, setOutputLanguage] = useState("es");

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Spanish" },
    { code: "fr", label: "French" },
    { code: "de", label: "German" },
    { code: "it", label: "Italian" },
    { code: "pt", label: "Portuguese" },
    { code: "hi", label: "Hindi" },
    { code: "ja", label: "Japanese" },
    { code: "zh", label: "Chinese" },
    { code: "ko", label: "Korean" },
  ];

  const translateText = async () => {
    if (!text) {
      alert("Please enter text to translate.");
      return;
    }
    setLoading(true);
    try {

      

    } catch (error) {
      console.error("Error during translation:", error);
      alert("Translation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>Input Language:</Text>
          <View style={styles.dropdownContainer}>
            <Picker
              selectedValue={inputLanguage}
              onValueChange={(itemValue) => setInputLanguage(itemValue)}
              style={styles.picker}
            >
              {languages.map((lang) => (
                <Picker.Item
                  key={lang.code}
                  label={lang.label}
                  value={lang.code}
                />
              ))}
            </Picker>
          </View>

          <Text style={styles.label}>Output Language:</Text>
          <View style={styles.dropdownContainer}>
            <Picker
              selectedValue={outputLanguage}
              onValueChange={(itemValue) => setOutputLanguage(itemValue)}
              style={styles.picker}
            >
              {languages.map((lang) => (
                <Picker.Item
                  key={lang.code}
                  label={lang.label}
                  value={lang.code}
                />
              ))}
            </Picker>
          </View>

          <Text style={styles.label}>Enter Text:</Text>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder="Type your text here..."
            multiline
          />

          <TouchableOpacity style={styles.button} onPress={translateText}>
            <Text style={styles.buttonText}>Translate</Text>
          </TouchableOpacity>

          <Text style={styles.label}>Translated Text:</Text>
          <TextInput
            style={styles.translatedInput}
            value={translatedText}
            editable={false}
            placeholder="Translation result..."
            multiline
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 15,
    backgroundColor: "#fff",
    height: 140,
  },
  picker: {
    width: "100%",
    height: 140,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
    height: 100,
    textAlignVertical: "top",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 15,
    backgroundColor: "#4b0082",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  translatedInput: {
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#eaeaea",
    height: 150,
    textAlignVertical: "top",
  },
});
