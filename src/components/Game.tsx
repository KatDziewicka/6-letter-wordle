import * as wordsData from "../files/clues_six.json";
import getRandomWord from "../utils/getRandomWord";

export default function Game(): JSX.Element {
  const wordsList = wordsData.data;
  const words = Object.keys(wordsList);

  const randomWord = getRandomWord(words);

  return (
    <>
      <p>{randomWord}</p>
    </>
  );
}
