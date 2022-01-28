import { getLetterColour } from "../utils/getLetterColour";
import "../styles/ColourfulWord.css";

interface ColourfulWordProps {
  guessesArray: string[];
  todayWord: string;
}

export default function ColourfulWord({
  guessesArray,
  todayWord,
}: ColourfulWordProps): JSX.Element {
  return (
    <div>
      {guessesArray.length !== 0 ? (
        guessesArray.map((word, i) => {
          return (
            <div key={i}>
              {word.split("").map((letter, index) => {
                console.log(letter);
                return (
                  <p
                    className={getLetterColour(letter, index, todayWord)}
                    key={index}
                  >
                    {letter}
                  </p>
                );
              })}{" "}
            </div>
          );
        })
      ) : (
        <p>You haven't guessed yet</p>
      )}
    </div>
  );
}
