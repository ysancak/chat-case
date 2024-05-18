import { View, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@/lib";
import { wp } from "@/lib/utils";
import Text from "./Text";
import moment from "moment";

type Props = {
  role: string;
  content: string;
  date: string;
};

export default function MessageItem({ role, content, date }: Props) {
  const isUser = role === "user";
  const timeAgo = moment(date).format("HH:mm");

  return (
    <View>
      <View
        style={[
          styles.messageContainer,
          isUser ? styles.userMessage : styles.assistantMessage,
        ]}
      >
        <Text>{content}</Text>
      </View>
      <Text style={styles.timestamp} textAlign={isUser ? "right" : "left"}>
        {timeAgo}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 22,
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
  timestamp: {
    fontSize: 13,
    opacity: 0.5,
    marginVertical: 2,
  },
});
