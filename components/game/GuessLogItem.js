import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginHorizontal: 24,
    padding: 12,
    borderRadius: 40,
    marginVertical: 8,
    backgroundColor: Colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: Colors.teal,
    borderWidth: 2,
    elevation: 4,
    shadowColor: Colors.teal,
    shadowOffset: 5,
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  itemText: {
    color: Colors.teal,
    fontFamily: "open-sans",
    fontWeight: "bold",
  },
  color: {
    color: Colors.black,
  },
});
