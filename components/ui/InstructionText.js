import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.grey,
    fontSize: 24,
  },
});
