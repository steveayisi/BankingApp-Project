import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";

const RegisterScreen = ({ navigation }) => {
  const [fullname, setFullname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    if (!fullname || !mobile || !email) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    // Simulate registration success
    Alert.alert("Success", "Registration successful!", [
      {
        text: "OK",
        onPress: () => navigation.navigate("RegisterSub", { mobile }),
      },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.backButtonText}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>Register</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={require("../../assets/banking.jpg")}
          style={styles.image}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your Fullname"
            value={fullname}
            onChangeText={setFullname}
          />
        </View>
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
            placeholder="Enter your email address"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginButtonText}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff7f50",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    flexDirection: "row",
    paddingTop: 25,
    paddingBottom: 20,
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 20,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  registerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "50%",
    height: undefined,
    aspectRatio: 1,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    width: "100%",
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  registerButton: {
    backgroundColor: "#ff7f50",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginBottom: 20,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginButton: {
    marginTop: 10,
  },
  loginButtonText: {
    color: "#ff7f50",
    fontSize: 18,
  },
});

export default RegisterScreen;
