import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    marginTop: 36,
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 8,
    elevation: 4,
    shadowColor: Colors.white,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.6,
    elevation: 10,
    alignItems: "center",
  },
});
