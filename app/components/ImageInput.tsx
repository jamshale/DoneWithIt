import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import colors from "../config/colors";

interface Props {
  imageUri?: string;
  onChangeImage: (uri: string) => void;
}

const ImageInput = ({ imageUri, onChangeImage }: Props) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access images");
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete the image?", [
        { text: "Yes", onPress: () => onChangeImage(imageUri) },
        { text: "No" },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) onChangeImage(result.assets[0].uri);
    } catch (error) {
      console.log("Error getting image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri ? (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        ) : (
          <Image source={{ uri: imageUri }} style={styles.image} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 80,
    justifyContent: "center",
    overflow: "hidden",
    width: 80,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
