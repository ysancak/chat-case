import { useState, useEffect, useRef } from "react";
import { Alert, Platform } from "react-native";
import EventSource from "react-native-sse";

const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const eventSourceRef = useRef<EventSource | null>(null);

  const sendMessage = async (message: string) => {
    if (inputText.trim().length <= 0) return;

    setLoading(true);
    setInputText("");

    const newMessages = [
      ...messages,
      { role: "user", content: message, date: new Date().toISOString() },
      { role: "assistant", content: "", date: new Date().toISOString() },
    ];
    setMessages(newMessages);

    const lastTenMessages = newMessages.slice(-10);

    const url = Platform.select({
      ios: "http://localhost:3000/chat",
      android: "http://10.0.2.2:3000/chat",
    });

    try {
      eventSourceRef.current = new EventSource(url, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ messages: lastTenMessages }),
        pollingInterval: 0,
        lineEndingCharacter: undefined,
      });

      eventSourceRef.current.addEventListener("message", (event) => {
        if (event.data === "[END]") {
          eventSourceRef.current?.close();
          setLoading(false);
        } else {
          const content = event.data.replace(/\\s/g, " ");
          setMessages((prevMessages) => {
            const updatedMessages = [...prevMessages];
            const lastMessage = updatedMessages[updatedMessages.length - 1];
            lastMessage.content += content;
            return updatedMessages;
          });
        }
      });

      eventSourceRef.current.addEventListener("error", (error: Event) => {
        Alert.alert(
          "Error",
          "EventSource failed: " + (error as ErrorEvent).message
        );
        eventSourceRef.current?.close();
        setLoading(false);
      });
    } catch (error) {
      Alert.alert("Error", "Error: " + (error as Error).message);
      setLoading(false);
    }
  };

  const stopChat = () => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  }, []);

  return {
    messages,
    inputText,
    setInputText,
    loading,
    sendMessage,
    stopChat,
  };
};

export default useChat;
