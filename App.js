import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Datetimepicker from "./src/component/Datetimepicker";
import Home from "./src/screens/Home";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
