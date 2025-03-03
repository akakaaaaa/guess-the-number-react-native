import { Text, View, Image, StyleSheet } from "react-native";
import { Title } from "../components/ui/Title";
import { Card } from "../components/ui/Card";
import Colors from "../constants/colors";
import { PrimaryButton } from "../components/ui/PrimaryButton";

export const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) => {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <Card>
        <Text style={styles.finalText}>Your number was:</Text>
        <Text style={styles.numberText}>{userNumber}</Text>
        <Text style={styles.finalText}>
          Your phone needed {roundsNumber} rounds to guess the number
        </Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={onStartNewGame} style={styles.buttonStyle}>
              Start New Game
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  finalText: {
    fontSize: 24,
    fontFamily: "open-sans",
    color: Colors.grey,
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  numberText: {
    color: Colors.teal,
    fontFamily: "open-sans-bold",
    fontSize: 36,
    marginVertical: 20,
  },
  buttonContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonStyle: {
    fontSize: 24,
  },
});
