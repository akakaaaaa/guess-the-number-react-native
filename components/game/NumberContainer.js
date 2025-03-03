import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.teal,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
