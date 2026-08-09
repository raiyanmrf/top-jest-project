export const calculator = {
  add(a, b) {
    if (typeof a !== "number") return false;
    if (typeof b !== "number") return false;
    return a + b;
  },
  subtract(a, b) {
    if (typeof a !== "number") return false;
    if (typeof b !== "number") return false;
    return a - b;
  },

  multiply(a, b) {
    if (typeof a !== "number") return false;
    if (typeof b !== "number") return false;
    return a * b;
  },

  division(a, b) {
    if (typeof a !== "number") return false;
    if (typeof b !== "number") return false;

    return a / b;
  },
};
