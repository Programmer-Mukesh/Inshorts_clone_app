import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import InShortsTab from "./Components/InShortsTab";
import Context, { NewsContext } from "./API/Context";

export default function App() {
  return (
    <Context>
      <View style={styles.container}>
        <InShortsTab />
      </View>
    </Context>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
