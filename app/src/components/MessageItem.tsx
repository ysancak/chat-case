import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, values } from "@/lib";
import { wp } from "@/lib/utils";

type Props = {
  role: string;
  content: string;
};

export default function MessageItem({ role, content }: Props) {
  return (
    <View
      style={[
        styles.messageContainer,
        role === "user" ? styles.userMessage : styles.assistantMessage,
      ]}
    >
      <Text>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: values.borderRadius,
    marginVertical: 4,
    maxWidth: wp(90),
  },
  userMessage: {
    backgroundColor: colors.secondaryColor,
    alignSelf: "flex-end",
  },
  assistantMessage: {
    backgroundColor: "#ECECEC",
    alignSelf: "flex-start",
  },
});
