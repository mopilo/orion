import React from "react";
import { IconButton, Surface } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";

interface ImagePickerComponentProps {
  showCamera: boolean;
  handleImageUpload: () => void;
  img: string;
}
export function ImagePickerComponent({
  showCamera,
  handleImageUpload,
  img,
}: ImagePickerComponentProps) {
  return (
    showCamera && (
      <View style={{ flexDirection: "row" }}>
        {img && <Image style={styles.image} source={{ uri: img }} />}
        <Surface style={styles.surface} mode="flat">
          <IconButton
            icon="camera"
            size={35}
            onPress={handleImageUpload}
            rippleColor={"transparent"}
          />
        </Surface>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 110,
    height: 110,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});
