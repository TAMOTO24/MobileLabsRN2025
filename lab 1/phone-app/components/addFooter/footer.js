import React from "react";
import { View, Text, StyleSheet} from "react-native";

const Footer = () => (
  <View style={styles.footerContainer}>
    <Text style={styles.footerText}>© Левкович Олександр Олексійович ІПЗк-23-1</Text>
  </View>
);
const styles = StyleSheet.create({
  footerContainer: {
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  footerText: {
    fontSize: 12,
    color: "#888",
  },
});

export default Footer;
