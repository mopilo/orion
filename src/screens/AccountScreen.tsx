import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import {
  Avatar,
  IconButton,
  TextInput,
  Text,
  useTheme,
  HelperText,
  Surface,
} from "react-native-paper";

const AccountScreen = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const theme = useTheme();
  const { colors } = theme;

  useEffect(() => {
    // array of words
    const words = text.split(" ");

    // update word count
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== "") {
        wordCount++;
      }
    });
    setWordCount(wordCount);

    // update char count (including whitespaces)
  }, [text]);

  const callWordCount = (word: string) => {
    if (text.length > 0) {
      console.log("l");
      setWordCount(text.split(" ").length);
    } else {
      console.log("p");
      setWordCount(0);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.headerStyles}>
        <Avatar.Image size={50} source={require("../../assets/avatar.jpg")} />
        <View style={{ flexDirection: "row" }}>
          <IconButton
            icon="camera"
            size={22}
            onPress={() => console.log(setShowCamera(true))}
          />
          <IconButton
            icon="map-marker"
            size={22}
            onPress={() => console.log("Pressed")}
          />
          <IconButton
            icon={{ source: "format-list-bulleted", direction: "rtl" }}
            size={22}
            onPress={() => console.log("Pressed")}
            style={{ direction: "rtl" }}
          />
        </View>
        <IconButton
          icon="rocket-launch"
          size={30}
          onPress={() => console.log("Pressed")}
          style={{ direction: "rtl" }}
        />
      </View>
      <View>
        <TextInput
          placeholder="Type here..."
          placeholderTextColor={"#cccccc"}
          value={text}
          underlineColor="transparent"
          style={{ backgroundColor: "transparent", fontSize: 14, height: 40 }}
          theme={{ ...theme, colors: { ...colors, primary: "transparent" } }}
          onChangeText={(text) => {
            setText(text);
            // callWordCount(text)
          }}
        />
      </View>
      <View style={{ alignItems: "flex-end", marginEnd: 20 }}>
        <Text variant="labelSmall">{wordCount}/50</Text>
      </View>
      { showCamera &&
        <Surface style={styles.surface} mode="flat">
          <IconButton
            icon="camera"
            size={35}
            onPress={() => console.log("Pressed")}
            rippleColor={"transparent"}
          />
        </Surface>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
  },
  surface: {
    padding: 8,
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AccountScreen;
