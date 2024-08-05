import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    Alert.alert(
      "Success",
      "Login successful",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("Home"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={require("../../assets/banking.jpg")}
          style={styles.image}
        />
        <Text style={styles.welcomeText}>Welcome back</Text>
        <Text style={styles.descriptionText}>
          We are happy to see you again
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.countryCode}>+233</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number"
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={setMobile}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.signUpButtonText}>
            Do not have an account? Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.onboardingButton}
          onPress={() => navigation.navigate("Onboarding")}
        >
          <Text style={styles.onboardingButtonText}>Explore Features</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/banking.jpg")}
          style={styles.logo}
        />
        <Text style={styles.bankName}>CONFI BANK</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff7f50",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  loginText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 13,
    marginBottom: 10,
  },
  countryCode: {
    fontSize: 18,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: "#ff7f50",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginBottom: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signUpButton: {
    marginTop: 10,
  },
  signUpButtonText: {
    color: "#ff7f50",
    fontSize: 16,
  },
  onboardingButton: {
    marginTop: 20,
  },
  onboardingButtonText: {
    color: "#ff7f50",
    fontSize: 16,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 0.8,
  },
  bankName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff7f50",
  },
});

export default LoginScreen;
