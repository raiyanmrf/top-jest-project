import { analyzeArray } from "../src/analyzeArray";

test("analyzeArray: [1,2,3,0]", () => {
  expect(analyzeArray([1, 2, 3, 0])).toEqual({
    length: 4,
    min: 0,
    max: 3,
    average: 1.5,
  });
});
test("analyzeArray: [5,2,2,3]", () => {
  expect(analyzeArray([1.4, 0.2, 0.2, 0.3])).toEqual({
    length: 4,
    min: 0.2,
    max: 1.4,
    average: 0.52,
  });
});

test("analyzeArray: [false,true,undefined,null,1,0]", () => {
  expect(() => analyzeArray([false, true, undefined, null, 1, 0])).toThrow();
});
test("analyzeArray: [[1,2,3], {a:1}]", () => {
  expect(() => analyzeArray([[1, 2, 3], { a: 1 }])).toThrow();
});
test("analyzeArray: string", () => {
  expect(() => analyzeArray("string")).toThrow();
});
