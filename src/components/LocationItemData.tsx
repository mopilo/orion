import React, { useMemo, useState } from "react";
import { Pressable, View } from "react-native";
import { Searchbar, Text } from "react-native-paper";

interface LocationItemDataProps {
  close: () => void;
  onChangeSearch: (query: string) => void;
  searchQuery: string;
  handleLocationCallBack: (place: string) => void;
}
export function LocationItemData({
  close,
  onChangeSearch,
  searchQuery,
  handleLocationCallBack,
}: LocationItemDataProps) {
  const locationData = useMemo(() => ["Melbourne", "Sydney", "Brisbane"], []);

  return (
    <View style={{ marginHorizontal: 10 }}>
      <Pressable onPress={close}>
        <Text style={{ alignSelf: "center", marginBottom: 20 }}>Close</Text>
      </Pressable>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ backgroundColor: "#f2f2f2", marginBottom: 10 }}
        icon={"map-search"}
      />
      {locationData.map((item: string, key: any) => (
        <Pressable
          key={key}
          onPress={() => {
            close();
            handleLocationCallBack(item);
          }}
        >
          <Text style={{ marginVertical: 5 }}>{item}</Text>
        </Pressable>
      ))}
    </View>
  );
}
