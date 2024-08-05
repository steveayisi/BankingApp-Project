import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";

const TransactionScreen = () => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [recipientnumber, setMobile] = useState("");
  const [transactions, setTransactions] = useState([
    { id: "1", recipient: "Mr. Agyemang", amount: "$200", date: "2024-08-01" },
    {
      id: "2",
      recipient: "Mrs Linda Baning",
      amount: "$150",
      date: "2024-08-02",
    },
  ]);

  const handleTransaction = () => {
    if (!amount || !recipient) {
      Alert.alert("Error", "Please enter all details.");
      return;
    }

    // Simulate adding a new transaction
    setTransactions([
      ...transactions,
      {
        id: (transactions.length + 1).toString(),
        recipient,
        recipientnumber,
        amount,
        date: new Date().toISOString().split("T")[0], // current date in YYYY-MM-DD format
      },
    ]);

    // Clear input fields
    setAmount("");
    setRecipient("");
    setMobile("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.content}>
        <Image
          source={require("../../assets/banking.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Recipient"
          value={recipient}
          onChangeText={setRecipient}
        />
        <TextInput
          style={styles.input}
          placeholder="Recipient Number"
          keyboardType="phone-pad"
          value={recipientnumber}
          onChangeText={setMobile}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <TouchableOpacity style={styles.button} onPress={handleTransaction}>
          <Text style={styles.buttonText}>Send Money</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.title}>Recent Transactions</Text>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Text style={styles.transactionText}>
                {item.date} - {item.recipient} - {item.amount}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1.5, // Adjusted flex to move content up
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    marginBottom: 20,
    marginTop: 5, // Added marginTop to move form up
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 25,
    padding: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#ff7f50",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  listContainer: {
    flex: 3, // Adjusted flex to take remaining space
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionItem: {
    padding: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  transactionText: {
    fontSize: 17,
  },
});

export default TransactionScreen;
