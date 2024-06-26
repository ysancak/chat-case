import React, { useRef } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ChatInput, MessageItem, SendButton, Text } from "@/components";
import useChat from "@/hooks/useChat";

export default function Chat() {
  const flatListRef = useRef(null);
  const { messages, inputText, setInputText, loading, sendMessage, stopChat } =
    useChat();

  const scrollToBottom = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.header}>
          <Text style={styles.headerText} bold>
            Messages
          </Text>
        </View>
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={({ item }) => <MessageItem {...item} />}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.messageListContainer}
          onContentSizeChange={scrollToBottom}
          onLayout={scrollToBottom}
          ListFooterComponent={<View style={styles.contentBottomSpace} />}
          style={styles.messageList}
        />
        <View style={styles.inputContainer}>
          <ChatInput
            value={inputText}
            onChange={(value) => setInputText(value)}
            onFocus={scrollToBottom}
            loading={loading}
            disabled={loading}
          />
          <SendButton
            onPress={() => (loading ? stopChat() : sendMessage(inputText))}
            loading={loading}
            disabled={inputText.trim().length <= 0 && !loading}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    padding: 16,
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
  },
  messageList: {
    flex: 1,
  },
  messageListContainer: {
    padding: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 4,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  contentBottomSpace: {
    height: 10,
  },
});
