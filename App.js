import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useState } from "react";
import { StartGameScreen } from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { GameScreen } from "./screens/GameScreen";
import { GameOverScreen } from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameisOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(1);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function numberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOVerHandler() {
    setGameIsOver(true);
  }

  function handleRounds() {
    setGuessRounds((prev) => prev + 1);
  }

  function startNewGamehandler() {
    setUserNumber(null);
    setGuessRounds(1);
  }

  let screen = <StartGameScreen onPickNumber={numberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        onGameOver={gameOVerHandler}
        userNumber={userNumber}
        onRoundsHandler={handleRounds}
        setGuessRounds={setGuessRounds}
      />
    );
  }

  if (gameisOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGamehandler}
      />
    );
  }

  return (
    <LinearGradient colors={["#222831", "#193E46"]} style={styles.rootScreen}>
      <ImageBackground
        resizeMode="cover"
        source={require("./assets/images/dices.png")}
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
