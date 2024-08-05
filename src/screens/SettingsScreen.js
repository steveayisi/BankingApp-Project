import React from "react";
import {
  View,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState("");

  const handleTabPress = (message) => {
    setModalMessage(message);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setModalMessage("");
  };

  const handleLogout = () => {
    Alert.alert(
      "Logged out",
      "You have been logged out successfully",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("Onboarding"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() =>
            handleTabPress(
              "Application will check and update feature. Your old version may be replaced with a new one. Continue?"
            )
          }
        >
          <Text style={styles.tabText}>Update Product</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => handleTabPress("Application update is in progress.")}
        >
          <Text style={styles.tabText}>Application Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() =>
            handleTabPress(
              "Manage your authentication questions for better security."
            )
          }
        >
          <Text style={styles.tabText}>Authentication Questions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() =>
            handleTabPress(
              "Request to create a new password will be processed."
            )
          }
        >
          <Text style={styles.tabText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() =>
            handleTabPress(
              "Request to create a new password will be processed."
            )
          }
        >
          <Text style={styles.tabText}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() =>
            handleTabPress(
              "Application will be reset to the stage where user needs to re-configure."
            )
          }
        >
          <Text style={styles.tabText}>Reset Application</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => handleTabPress("Rate the app.")}
        >
          <Text style={styles.tabText}>Rate App</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => handleTabPress("Change the background of the app.")}
        >
          <Text style={styles.tabText}>Change Background</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <View style={styles.modalButtons}>
              <Pressable style={styles.modalButton} onPress={handleCloseModal}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </Pressable>
              <Pressable style={styles.modalButton} onPress={handleCloseModal}>
                <Text style={styles.modalButtonText}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
    height: 20,
  },
  tabsContainer: {
    flex: 1,
  },
  tab: {
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  tabText: {
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: "#F44336",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // Removed background opacity
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  modalButtonText: {
    fontSize: 16,
  },
});

export default SettingsScreen;
