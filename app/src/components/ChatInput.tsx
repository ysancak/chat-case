import React from "react";
import { StyleSheet, TextInput } from "react-native";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onFocus: () => void;
  loading: boolean;
  disabled: boolean;
};

export default function MessageInput({
  value,
  onChange,
  onFocus,
  loading,
  disabled,
}: Props) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChange}
      onFocus={onFocus}
      placeholder="Type a message"
      editable={!disabled || !loading}
      selectTextOnFocus={!disabled || !loading}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 20,
    padding: 12,
    marginRight: 8,
  },
});
