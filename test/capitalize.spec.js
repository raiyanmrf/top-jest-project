import { capitalize } from "../src/capitalize";

test("Capitalize: Lowercase", () => {
  expect(capitalize("raiyan")).toBe("Raiyan");
});

test("Capitalize: Number", () => {
  expect(capitalize(123)).toBeFalsy();
});
test("Capitalize: Boolean", () => {
  expect(capitalize(true)).toBeFalsy();
});
test("Capitalize: Uppercase", () => {
  expect(capitalize("RAIYAN")).toBe("RAIYAN");
});

test("Capitalize: Symbols", () => {
  expect(capitalize("%AIYAN")).toBe("%AIYAN");
});
test("Capitalize: Number String", () => {
  expect(capitalize("123")).toBe("123");
});
test("Capitalize: No args", () => {
  expect(capitalize()).toBeFalsy();
});
