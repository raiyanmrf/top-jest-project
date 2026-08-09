import { calculator } from "../src/calculator";

test("ADD: two integer", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("ADD: two floats", () => {
  expect(calculator.add(0.2, 0.1)).toBeCloseTo(0.3, 5);
});
test("ADD: one float", () => {
  expect(calculator.add(0.2, 1)).toBeCloseTo(1.2, 5);
});
test("ADD: FAIL Big int", () => {
  expect(calculator.add(2n, 5n)).toBeFalsy();
});

test("ADD: FAIL NaN", () => {
  expect(calculator.add(2, "1")).toBeFalsy();
  expect(calculator.add("2", "1")).toBeFalsy();
  expect(calculator.add({ a: 1 }, ["1"])).toBeFalsy();
  expect(calculator.add({ a: 1 }, ["1"])).toBeFalsy();
});

test("SUB: two integer", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});
test("SUB: a < b", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});
test("SUB: Two Negative Int", () => {
  expect(calculator.subtract(-1, -2)).toBe(1);
});
test("SUB: two floats", () => {
  expect(calculator.subtract(0.2, 0.1)).toBeCloseTo(0.1, 5);
});
test("SUB: one float", () => {
  expect(calculator.subtract(2, 0.1)).toBeCloseTo(1.9, 5);
});
test("SUB: Float a < b", () => {
  expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1, 5);
});
test("SUB: Two Negative Floats", () => {
  expect(calculator.subtract(-0.1, -0.2)).toBeCloseTo(0.1, 5);
});

test("SUB: FAIL Big Int", () => {
  expect(calculator.subtract(2n, 1n)).toBeFalsy();
});
test("SUB: FAIL NaN", () => {
  expect(calculator.subtract(2, "1")).toBeFalsy();
  expect(calculator.subtract("2", "1")).toBeFalsy();
  expect(calculator.subtract({ a: 1 }, ["1"])).toBeFalsy();
});

test("MULT: two integer", () => {
  expect(calculator.multiply(2, 1)).toBe(2);
});
test("MULT: two negative integer", () => {
  expect(calculator.multiply(-2, -1)).toBe(2);
});
test("MULT: one negative integer", () => {
  expect(calculator.multiply(-2, 1)).toBe(-2);
});
test("MULT: two floats", () => {
  expect(calculator.multiply(0.2, 0.1)).toBeCloseTo(0.02, 5);
});
test("MULT: one float", () => {
  expect(calculator.multiply(2, 0.1)).toBeCloseTo(0.2, 5);
});

test("MULT: Two Negative Floats", () => {
  expect(calculator.multiply(-0.1, -0.2)).toBeCloseTo(0.02, 5);
});
test("MULT: One Negative Float", () => {
  expect(calculator.multiply(-0.1, 0.2)).toBeCloseTo(-0.02, 5);
});
test("MULT: FAIL Big Int", () => {
  expect(calculator.multiply(2n, 1n)).toBeFalsy();
});
test("MULT: FAIL NaN", () => {
  expect(calculator.multiply(2, "1")).toBeFalsy();
  expect(calculator.multiply("2", "1")).toBeFalsy();
  expect(calculator.multiply({ a: 1 }, ["1"])).toBeFalsy();
});

test("DIV: two integer", () => {
  expect(calculator.division(2, 1)).toBe(2);
});
test("DIV: two negative integer", () => {
  expect(calculator.division(-2, -1)).toBe(2);
});
test("DIV: one negative integer", () => {
  expect(calculator.division(-2, 1)).toBe(-2);
});
test("DIV: two floats", () => {
  expect(calculator.division(0.2, 0.1)).toBeCloseTo(2, 5);
});
test("DIV: one float", () => {
  expect(calculator.division(2, 0.1)).toBeCloseTo(20, 5);
});

test("DIV: Two Negative Floats", () => {
  expect(calculator.division(-0.1, -0.2)).toBeCloseTo(0.5, 5);
});
test("DIV: One Negative Float", () => {
  expect(calculator.division(-0.1, 0.2)).toBeCloseTo(-0.5, 5);
});
test("DIV: 1/0", () => {
  expect(calculator.division(1, 0)).toBe(Infinity);
});

test("DIV: FAIL Big Int", () => {
  expect(calculator.division(2n, 1n)).toBeFalsy();
});
test("DIV: FAIL NaN", () => {
  expect(calculator.division(2, "1")).toBeFalsy();
  expect(calculator.division("2", "1")).toBeFalsy();
  expect(calculator.division({ a: 1 }, ["1"])).toBeFalsy();
});
