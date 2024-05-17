import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Auth from "./src/pages/Auth";

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"red"} />
      <Auth />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
