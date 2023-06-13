import React, { createRef, useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

export interface ImageInputListProps {
  imageUris: string[];
  onAddImage: (uri: string) => void;
  onRemoveImage: (uri: string) => void;
}

const ImageInputList = ({
  imageUris,
  onAddImage,
  onRemoveImage,
}: ImageInputListProps) => {
  let scrollViewRef = useRef<ScrollView>(null);

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        onContentSizeChange={() =>
          scrollViewRef.current?.scrollToEnd({ animated: true })
        }
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri: string) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
