import { TextInput, View, StyleSheet, Alert } from "react-native";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import { Title } from "../components/ui/Title";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";

export const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function confirmHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: () => setEnteredNumber(""),
        },
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess Number Game</Title>
      <Card style={styles.inputContainer}>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          placeholder="..."
          onChangeText={(enteredText) => {
            setEnteredNumber(enteredText);
          }}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => setEnteredNumber("")}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    flex: 1,
  },
  numberInput: {
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.black,
    borderBottomWidth: 2,
    color: Colors.teal,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
