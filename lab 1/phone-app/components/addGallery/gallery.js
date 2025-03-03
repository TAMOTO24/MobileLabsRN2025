import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

const GalleryScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.grid}>
        {Array.from({ length: 20 }).map((_, index) => (
          <View key={index} style={styles.gridItem} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "49%",
    height: "30%",
    aspectRatio: 1,
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});

export default GalleryScreen;
