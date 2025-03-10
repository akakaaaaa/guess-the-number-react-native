import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.teal,
    textAlign: "center",
    maxWidth: "80%",
    alignSelf: "center",
  },
});
