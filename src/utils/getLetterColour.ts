export function getLetterColour(
  letter: string,
  index: number,
  word: string
): string {
  if (!word.includes(letter)) {
    return "black";
  }
  if (word[index] === letter) {
    return "green";
  } else {
    return "yellow";
  }
}
