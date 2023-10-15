import React, { useMemo, useState } from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

interface FeedItemProps {
  close: () => void;
  handleFeedCallBack: (feed: string) => void;
}

export function FeedItem({ close, handleFeedCallBack }: FeedItemProps) {
  const feedData = useMemo(() => ["Painting", "Indigenous", "Tattooing"], []);
  const [selected, setSelected] = useState("");

  return (
    <View style={{ marginHorizontal: 10 }}>
      <Text style={{ alignSelf: "center" }}>Choose feed category</Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginVertical: 15,
        }}
      >
        {feedData.map((item: string, key: any) => (
          <Pressable
            key={key}
            style={
              selected === item
                ? styles.feedItemInactiveStyle
                : styles.feedItemActiveStyle
            }
            onPress={() => {
              setSelected(item);
            }}
          >
            <Text
              key={key}
              style={{
                marginVertical: 5,
                color: selected === item ? "white" : "#67608E",
              }}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
      <Button
        mode="contained"
        buttonColor="#36C0D8"
        style={{ marginHorizontal: 50 }}
        onPress={() => {
          if (selected) {
            close();
            handleFeedCallBack(selected);
          }
        }}
      >
        Close
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  feedItemActiveStyle: {
    borderWidth: 1,
    borderColor: "#909090",
    borderRadius: 50,
    padding: 8,
  },
  feedItemInactiveStyle: {
    padding: 8,
  },
});
