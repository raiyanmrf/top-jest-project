export function reverseString(str) {
  if (typeof str !== "string") return false;
  const arr = str.split("").reverse();
  const newStr = arr.join("");
  return newStr;
}
