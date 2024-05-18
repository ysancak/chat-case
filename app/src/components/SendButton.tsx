import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@/lib";
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
};

export default function SendButton({
  loading = false,
  disabled = false,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: disabled
            ? colors.disabledColor
            : colors.primaryColor,
        },
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <Icon
        name={loading ? "stop" : "send"}
        size={20}
        color={colors.primaryForegroundColor}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: colors.primaryColor,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
  },
});
