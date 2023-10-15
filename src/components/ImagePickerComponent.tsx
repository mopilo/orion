import React from "react";
import { IconButton, Surface } from "react-native-paper";
import { View, StyleSheet } from "react-native";


export function ImagePickerComponent({showCamera}: {showCamera: boolean}){
    return (
      showCamera && (
        <Surface style={styles.surface} mode="flat">
          <IconButton
            icon="camera"
            size={35}
            onPress={() => console.log("Pressed")}
            rippleColor={"transparent"}
          />
        </Surface>
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
  }
});