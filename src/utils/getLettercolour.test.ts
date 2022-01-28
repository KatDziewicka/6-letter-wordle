import { getLetterColour } from "./getLetterColour";

test("Check datatype is a string", () => {
  expect(typeof getLetterColour("b", 3, "doobra")).toBe("string");
});

test("expected value returned checking what colour the letter should be", () => {
  expect(getLetterColour("b", 3, "dobra")).toBe("yellow");
  expect(getLetterColour("a", 0, "arise")).toBe("green");
  expect(getLetterColour("z", 0, "mugs")).toBe("black");
});
