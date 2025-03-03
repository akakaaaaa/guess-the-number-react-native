import { StyleSheet, View, Alert, Text, FlatList } from "react-native";
import { Title } from "../components/ui/Title";
import { useState, useEffect, useTransition } from "react";
import { NumberContainer } from "../components/game/NumberContainer";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { InstructionText } from "../components/ui/InstructionText";
import { Card } from "../components/ui/Card";
import { Ionicons } from "@expo/vector-icons";
import { GuessLogItem } from "../components/game/GuessLogItem";
import Colors from "../constants/colors";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = ({ userNumber, onGameOver, setGuessRounds }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guesses, setGuesses] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong... "),
        [{ text: "Sorry", style: "cancel" }];
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prev) => prev + 1);
    setGuesses((prev) => [newRndNumber, ...prev]);
  }

  const guessRoundsListLenght = guesses.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <Card>
        <View>
          <NumberContainer>{currentGuess}</NumberContainer>
        </View>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={18} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="add" size={18} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <Text style={styles.color}>Rounds:</Text>
        <FlatList
          data={guesses}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLenght - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  color: {
    color: Colors.white,
    marginHorizontal: 24,
    marginTop: 10,
  },
  listContainer: {
    flex: 1,
    marginTop: 10,
  },
});
