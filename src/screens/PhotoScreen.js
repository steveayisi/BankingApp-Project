import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
// import FingerprintScanner from "react-native-fingerprint-scanner";

const PhotoScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);
  // const [leftFingerprintVerified, setLeftFingerprintVerified] = useState(false);
  // const [rightFingerprintVerified, setRightFingerprintVerified] = useState(false);

  // useEffect(() => {
  //   FingerprintScanner.isSensorAvailable()
  //     .then(() => {
  //       // Sensor is available
  //     })
  //     .catch((error) => {
  //       Alert.alert("Error", error.message);
  //     });

  //   return () => {
  //     FingerprintScanner.release();
  //   };
  // }, []);

  const handleChoosePhoto = () => {
    launchImageLibrary({}, (response) => {
      if (response.assets) {
        setPhoto(response.assets[0].uri);
      }
    });
  };

  const handleTakePhoto = () => {
    launchCamera({}, (response) => {
      if (response.assets) {
        setPhoto(response.assets[0].uri);
      }
    });
  };

  // const handleLeftFingerprintAuth = () => {
  //   FingerprintScanner.authenticate({
  //     description: "Scan your left fingerprint to continue",
  //   })
  //     .then(() => {
  //       setLeftFingerprintVerified(true);
  //       Alert.alert(
  //         "Authentication Successful",
  //         "Left fingerprint authenticated successfully."
  //       );
  //     })
  //     .catch((error) => {
  //       Alert.alert("Authentication Failed", error.message);
  //     });
  // };

  // const handleRightFingerprintAuth = () => {
  //   FingerprintScanner.authenticate({
  //     description: "Scan your right fingerprint to continue",
  //   })
  //     .then(() => {
  //       setRightFingerprintVerified(true);
  //       Alert.alert(
  //         "Authentication Successful",
  //         "Right fingerprint authenticated successfully."
  //       );
  //     })
  //     .catch((error) => {
  //       Alert.alert("Authentication Failed", error.message);
  //     });
  // };

  const handleRegister = () => {
    console.log("Register button pressed"); // Debugging line
    Alert.alert("Success", "Successfully Registered", [
      {
        text: "OK",
        onPress: () => navigation.navigate("Login"),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Capture Details</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={require("../../assets/banking.jpg")}
          style={styles.image}
        />
        <TouchableOpacity
          onPress={handleChoosePhoto}
          style={styles.photoButton}
        >
          <Text style={styles.photoButtonText}>Choose Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTakePhoto} style={styles.photoButton}>
          <Text style={styles.photoButtonText}>Take Photo</Text>
        </TouchableOpacity>
        {photo && <Image source={{ uri: photo }} style={styles.photo} />}
      </View>
      <View style={styles.fingerprintContainer}>
        {/* {!leftFingerprintVerified ? (
          <Button
            title="Verify Left Fingerprint"
            onPress={handleLeftFingerprintAuth}
          />
        ) : (
          <Text style={styles.verifiedText}>Left Fingerprint Verified</Text>
        )}
        {!rightFingerprintVerified ? (
          <Button
            title="Verify Right Fingerprint"
            onPress={handleRightFingerprintAuth}
          />
        ) : (
          <Text style={styles.verifiedText}>Right Fingerprint Verified</Text>
        )} */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister} // Ensure this calls the function
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
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
    flexDirection: "row",
    paddingTop: 0.7,
  },
  headerText: {
    flex: 1,
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
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
  image: {
    width: 150,
    height: 150,
    marginBottom: 100,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  photoButton: {
    backgroundColor: "#ff7f50",
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 30,
    width: "80%",
  },
  photoButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  photo: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 100,
  },
  fingerprintContainer: {
    padding: 15,
    alignItems: "center",
    borderRadius: 30,
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
  },
  verifiedText: {
    color: "green",
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 16,
  },
});

export default PhotoScreen;
