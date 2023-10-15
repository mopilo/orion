import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, IconButton } from "react-native-paper";

interface HeaderComponentProps {
  openCamera: () => void;
  openLocationBottomSheet: () => void;
  openFeedBottomSheet: () => void;
  submit: () => void;
}

export function HeaderComponent({
  openCamera,
  openLocationBottomSheet,
  openFeedBottomSheet,
  submit,
}: HeaderComponentProps) {
  return (
    <View style={styles.headerStyles}>
      <Avatar.Image size={50} source={require("../../assets/avatar.jpg")} />
      <View style={{ flexDirection: "row" }}>
        <IconButton icon="camera" size={22} onPress={openCamera} />
        <IconButton
          icon="map-marker"
          size={22}
          onPress={openLocationBottomSheet}
        />
        <IconButton
          icon={{ source: "format-list-bulleted", direction: "rtl" }}
          size={22}
          onPress={openFeedBottomSheet}
          style={{ direction: "rtl" }}
        />
      </View>
      <IconButton
        icon="rocket-launch"
        size={30}
        onPress={submit}
        style={{ direction: "rtl" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
  },
});
