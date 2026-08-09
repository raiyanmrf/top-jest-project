import { reverseString } from "../src/reverse-string";

test("reverseString: Word", () => {
  expect(reverseString("man")).toBe("nam");
});
test("reverseString: Sentence", () => {
  expect(reverseString("I am a man")).toBe("nam a ma I");
});
test("reverseString: Number string", () => {
  expect(reverseString("123")).toBe("321");
});
test("reverseString: String Special Chars", () => {
  expect(reverseString("%#&&&")).toBe("&&&#%");
});
test("reverseString: Fail Non String", () => {
  expect(reverseString(123)).toBeFalsy();
  expect(reverseString(true)).toBeFalsy();
  expect(reverseString(["mine"])).toBeFalsy();
});
