import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.teal,
    fontSize: deviceWidth < 380 ? 24 : 36,
    fontFamily: "open-sans-bold",
  },
});
