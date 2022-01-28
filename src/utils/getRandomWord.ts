export default function getRandomWord(wordsArr: string[]): string {
  return wordsArr[Math.floor(Math.random() * wordsArr.length)];
}
