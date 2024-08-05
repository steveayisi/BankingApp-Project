import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const RegisterSubScreen = ({ navigation }) => {
  const [dob, setDob] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [nextOfKin, setNextOfKin] = useState("");
  const [nextOfKinContact, setNextOfKinContact] = useState("");
  const [occupation, setOccupation] = useState("");

  return (
    <View style={styles.container}>
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
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
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
          placeholder="Home Address"
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
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Re-confirm Password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Photo")}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff7f50",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    flexDirection: "row",
    paddingTop: 25,
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
    marginBottom: -1,
  },
  content: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 5,
    width: "100%",
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  nextButton: {
    backgroundColor: "#ff7f50",
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom: 0.5,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RegisterSubScreen;
