import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [blankLogin, setBlankLogin] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    setBlankLogin(false);
    setInvalidLogin(false);
    if (username === "" || password === "") {
      setBlankLogin(true);
    } else if (username.toLowerCase() !== "admin" && password !== "password123!") {
      setInvalidLogin(true);
    } else {
      router.push(".."); // Redirect to the main app
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        {blankLogin && <Text style={styles.errorText}>Please enter username and password.</Text>}
        {invalidLogin && <Text style={styles.errorText}>Username/Password is incorrect.</Text>}
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity onPress={handleLogin} className="bg-gray-300 p-4 rounded">
            <Text className="text-black font self-center">Login</Text>
        </TouchableOpacity>
        <Text style={styles.redirectText}>Don't have an account yet? Register</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    alignSelf: "center",
  },
  inputContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  redirectText: {
    marginTop: 16,
    alignSelf: "center",
  },
  errorText: {
    color: "red",
    alignSelf: "center",
    marginBottom: 8,
  }
});
