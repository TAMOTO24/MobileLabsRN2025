import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import Header from "../addHeader/header";
import Footer from "../addFooter/footer";
import AppNavigator from "../../Navigation";

const newsData = Array(6).fill({
  title: "Заголовок новини",
  date: "Дата новини",
  description: "Короткий текст новини",
  image: "",
});

const NewsItem = ({ item }) => (
  <View style={styles.newsItem}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </View>
);

const NewsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        renderItem={({ item }) => <NewsItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  newsItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: "#777",
    marginBottom: 2,
  },
  description: {
    fontSize: 14,
    color: "#444",
  },
});

export default NewsScreen;
