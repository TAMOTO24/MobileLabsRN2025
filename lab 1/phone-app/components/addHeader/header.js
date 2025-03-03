import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.topBlock}>
        <Image
          source={require('../../assets/university-colored.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>FirstMobileApp</Text>
      </View>

      <View style={styles.navBlock}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("News")}
        >
          <Image source={require('../../assets/home.png')} style={styles.icon} />
          <Text style={styles.navText}>Головна</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Gallery")}
        >
          <Image source={require('../../assets/image.png')} style={styles.icon} />
          <Text style={styles.navText}>Фотогалерея</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Auth")}
        >
          <Image source={require('../../assets/user.png')} style={styles.icon} />
          <Text style={styles.navText}>Профіль</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
  },
  topBlock: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 40,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  navBlock: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 5,
  },
  navItem: {
    alignItems: "center",
    flex: 1,
    paddingVertical: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  navText: {
    fontSize: 12,
    color: "#666",
  },
  navTextActive: {
    fontSize: 12,
    color: "#007bff",
    fontWeight: "bold",
  },
});

export default Header;
