import React from "react";
import { View } from "react-native";
import { TextInput, Text, useTheme } from "react-native-paper";


export function InputComponent({
  wordCount,
  text,
  onTextChange,
}: {
  wordCount: number;
  text: string;
  onTextChange: (text: string)=> void
}) {
  const theme = useTheme();
  const { colors } = theme;
  return (
    <View>
      <TextInput
        placeholder="Type here..."
        placeholderTextColor={"#cccccc"}
        value={text}
        underlineColor="transparent"
        style={{ backgroundColor: "transparent", fontSize: 14, height: 40 }}
        theme={{ ...theme, colors: { ...colors, primary: "transparent" } }}
        onChangeText={onTextChange}
      />
      <Text
        style={{ alignSelf: "flex-end", marginEnd: 20 }}
        variant="labelSmall"
      >
        {wordCount}/50
      </Text>
    </View>
  );
}