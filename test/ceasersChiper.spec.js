import { ceasersChiper } from "../src/ceasersChiper";

test("CeasersChiper: a&A >> 3", () => {
  expect(ceasersChiper("a&A", 3)).toBe("d&D");
});

test("CeasersChiper: am >> -3", () => {
  expect(ceasersChiper("am", -3)).toBe("xj");
});

test("CeasersChiper: apple >> -3", () => {
  expect(ceasersChiper("apple", -3)).toBe("xmmib");
});
test("CeasersChiper: APPLE >> 3", () => {
  expect(ceasersChiper("APPLE", -3)).toBe("XMMIB");
});

test("CeasersChiper: A monster is .... no q >> 3", () => {
  expect(ceasersChiper("A monster is .... no q", 3)).toBe(
    "D prqvwhu lv .... qr t",
  );
});
test("CeasersChiper: zEn >> 3", () => {
  expect(ceasersChiper("zEn", 3)).toBe("cHq");
});
test("CeasersChiper: zEn >> 26", () => {
  expect(ceasersChiper("zEn", 26)).toBe("zEn");
});
test("CeasersChiper: zEn >> 52", () => {
  expect(ceasersChiper("zEn", 52)).toBe("zEn");
});
test("CeasersChiper: non string", () => {
  expect(() => ceasersChiper(100, 52)).toThrow();
});
