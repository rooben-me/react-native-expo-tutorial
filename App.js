import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";

import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("Please select an image");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          selectedImage={selectedImage}
          placeholderImageSource={PlaceholderImage}
        />
      </View>

      <View style={styles.footerContainer}>
        <Button
          onPress={pickImageAsync}
          label="Choose a photo"
          theme="primary"
        />
        <Button label="Use this photo" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    paddingTop: 58,
    flex: 1,
  },
  footerContainer: {
    padding: 48,
    flex: 1 / 3,
    alignItems: "center",
  },
});
