import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";

const RegisterSubScreen = ({ route, navigation }) => {
  const { mobile } = route.params;
  const [dob, setDob] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [nextOfKin, setNextOfKin] = useState("");
  const [nextOfKinContact, setNextOfKinContact] = useState("");
  const [occupation, setOccupation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    // Simulate successful registration and navigate to the next screen
    Alert.alert("Success", "Registration complete!", [
      {
        text: "OK",
        onPress: () => navigation.navigate("Photo"),
      },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Register")}
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
            placeholder="Date of Birth (YYYY-MM-DD)"
            value={dob}
            onChangeText={setDob}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Place of Birth"
            value={placeOfBirth}
            onChangeText={setPlaceOfBirth}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Occupation"
            value={occupation}
            onChangeText={setOccupation}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Home Address (Street, City, Zip Code)"
            value={homeAddress}
            onChangeText={setHomeAddress}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Next of Kin Name"
            value={nextOfKin}
            onChangeText={setNextOfKin}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Next of Kin Contact"
            value={nextOfKinContact}
            onChangeText={setNextOfKinContact}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Create Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
          <Text style={styles.registerButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
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
    paddingBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    width: "100%",
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: "#ff7f50",
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RegisterSubScreen;
