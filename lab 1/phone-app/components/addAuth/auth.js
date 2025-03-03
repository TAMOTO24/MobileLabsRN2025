import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Реєстрація</Text>
      <TextInput style={styles.input} placeholder="Електронна пошта" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Пароль" secureTextEntry />
      <TextInput style={styles.input} placeholder="Пароль (ще раз)" secureTextEntry />
      <TextInput style={styles.input} placeholder="Прізвище" />
      <TextInput style={styles.input} placeholder="Ім'я" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AuthScreen;
