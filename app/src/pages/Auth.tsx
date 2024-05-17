import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import auth from "@react-native-firebase/auth";
import { Button, View, Text } from "@/components";
import { colors } from "@/lib";
import useNavigation from "@/hooks/useNavigation";

export default function Auth() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      await auth().signInAnonymously();
      navigation.navigate("Chat");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View gap={16}>
        <Text bold variant="xlarge" textAlign="center">
          Sign In
        </Text>
        <Text textAlign="center" color={colors.descriptionColor}>
          Sign in anonymously to start chatting with AI
        </Text>
      </View>
      <Button
        label="Sign in"
        onPress={signIn}
        loading={loading}
        disabled={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 35,
    paddingHorizontal: 50,
    paddingVertical: 16,
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
});
