import { View, Text, FlatList } from "react-native";
import React from "react";

const Trending = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text style={{ fontSize: 30, color: "white" }}>{item.id}</Text>
      )}
      horizontal
    />
  );
};

export default Trending;
