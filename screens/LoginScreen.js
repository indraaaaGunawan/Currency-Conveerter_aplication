import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import { Card } from "react-native-paper";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate("Registration");
  };

  const handleLogin = () => {
    email === "" || password === ""
      ? alert("Please fill all the fields")
      : auth
          .signInWithEmailAndPassword(email, password)
          .then((userCredentials) => {
            const user = userCredentials.user;
            alert("Logged in successfully");
            console.warn("Logged in with:", user.email);
            navigation.navigate("Dashboard");
          })
          .catch((error) => alert(error.message));
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <Card.Cover
          source={{
            uri: "https://drive.google.com/uc?id=17nvwyKyYLgzOPSn_UHVYE1n2R3J0PF-N",
          }}
          style={{
            borderRadius: 20,
            marginBottom: 20,
            justifyContent: "center",
            width: 200,
            height: 200,
            alignSelf: "center",
          }}
        />
        <Text style={styles.titleLG}>SIGN IN</Text>
        <Text style={styles.title}>CURRENCY CONVERSION</Text>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          placeholder="Input Email Address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Input Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={[styles.buttonContainer, { flexDirection: "row" }]}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, { backgroundColor: "#ffffff", margin: 10 }]}
        >
          <Text style={[styles.buttonText, { color: "blue" }]}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    marginBottom: 5,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
    borderWidth: 1,
  },
  buttonContainer: {
    width: "59%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    flexDirection: "column",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "50%",
    padding: 15,
    marginRight: 10,
    marginLeft: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
  label: {
    color: "black",
    fontWeight: "700",
    fontSize: 18,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 25,
    textAlign: "center",
  },
  titleLG: {
    fontSize: 27,
    marginBottom: 1,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
    color: "#000000",
  },
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16,
  },
});
