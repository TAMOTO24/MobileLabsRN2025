import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./components/addHeader/header";
import Footer from "./components/addFooter/footer";
import AppNavigator from "./Navigation";

const MainLayout = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AppNavigator />
      </View>
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default MainLayout;
