import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const userName = "Steve Ayisi Agyiri"; // You can fetch this dynamically from the user's data
  const accountBalance = "$0.00"; // You can fetch this dynamically from the user's account data

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");

  const handleButtonPress = (text) => {
    setModalText(text);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>Welcome, {userName}!</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Account Balance</Text>
        <Text style={styles.balanceAmount}>{accountBalance}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("Scan and Pay")}
        >
          <Text style={styles.buttonText}>Scan and Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("Transfer Payments")}
        >
          <Text style={styles.buttonText}>Transfer Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("Airtime and Data")}
        >
          <Text style={styles.buttonText}>Airtime and Data</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("View All")}
        >
          <Text style={styles.buttonText}>View All</Text>
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalText}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  balanceContainer: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 20,
    elevation: 5,
  },
  balanceText: {
    fontSize: 18,
    color: "#888",
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#ff7f50",
    padding: 20,
    margin: 10,
    alignItems: "center",
    borderRadius: 10,
    width: "40%", // Adjusted for square buttons
    aspectRatio: 1, // Makes the buttons square
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#ff7f50",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HomeScreen;
