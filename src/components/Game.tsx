import { useEffect, useState } from "react";
import { sixLetterWords } from "../files/sixLetterWords";
import getRandomWord from "../utils/getRandomWord";
import axios from "axios";
import { API_BASE } from "../utils/APIFragments";
import "../styles/Game.css";
import { getLetterColour } from "../utils/getLetterColour";
import ColourfulWord from "./ColourfulWord";

export default function Game(): JSX.Element {
  const [wordToCheck, setWordToCheck] = useState<string>("");
  const [guessedWord, setGuessedWord] = useState<string>("");
  // const [currentWord, setCurrentWord] = useState<string>("thrice");
  const [todayWord, setTodayWord] = useState<string>("");
  const [isWordValid, setIsWordValid] = useState<boolean>(false);
  const [guessesArray, setGuessesArray] = useState<string[]>([]);
  const [win, setWin] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const handleWordValidating = (str: string) => {
    // setWordToCheck(str)
    if (str.length === 6 && words.includes(str)) {
      setIsWordValid(true);
      setGuessedWord(str);
    } else {
      setIsWordValid(false);
    }
  };

  const handleGuess = () => {
    guessedWord === todayWord ? setWin(true) : setWin(false);
    setGuessesArray([...guessesArray, guessedWord]);
    guessesArray.length === 6 && setGameOver(true);
  };

  const words = Object.keys(sixLetterWords.data);

  const handleWordPicking = () => {
    setGuessedWord("");
    setWordToCheck("");
    setGameOver(false);
    setGuessesArray([]);
    const word = getRandomWord(words);
    setTodayWord(word);
    console.log(`The word today is: ${todayWord}`)
  };

  return (
    <>
      <ColourfulWord guessesArray={guessesArray} todayWord={todayWord} />
      {!gameOver ? (
        <div>
      <h2>{wordToCheck}</h2>
      <input
        onChange={(e) => handleWordValidating(e.target.value)}
        maxLength={6}
      />
      <>{isWordValid === true ? <h3>	
        &#9745;
</h3> : <h3>❌</h3>}</>
      <button onClick={handleGuess}>Submit your guess</button> </div>) :(
      <div> 
      {win === true ? <p>You won!</p> : <p>Not this time!</p>}
      </div>)}
      <button onClick={handleWordPicking}>New game</button>

    </>
  );
}
