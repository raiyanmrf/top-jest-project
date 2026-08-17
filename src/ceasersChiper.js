export const ceasersChiper = (str, shift) => {
  try {
    if (typeof str !== "string") throw new Error("Please provide a string.");
    const arr = str.split("");
    // console.log(arr);
    const capitalLetters = createAsciiChart(65, 65 + 26);
    const smallLetters = createAsciiChart(97, 97 + 26);
    const newarr = arr.map((item) => {
      let asciiDec = item.charCodeAt(0);

      let char = String.fromCharCode(asciiDec);
      if (capitalLetters[char]) {
        const result = shifter(capitalLetters[char], shift);
        return findKey(capitalLetters, result);
      } else if (smallLetters[char]) {
        const result = shifter(smallLetters[char], shift);
        return findKey(smallLetters, result);
      } else return item;
    });

    // console.log(newarr);
    return newarr.join("");
  } catch (err) {
    throw err.message;
  }
};
function shifter(value, shift) {
  const result = (value + shift) % 26;

  // console.log(`${value} + ${shift} % 26 = ${result}`);

  return result <= 0 ? 26 + result : result; // if -2 then 26 + (-2) = 24 -> X
  // if 0 then 26 + 0 = 26 -> Z
}

function findKey(obj, givenValue) {
  for (const [key, value] of Object.entries(obj)) {
    if (value === givenValue) {
      return key;
    }
  }
}
function createAsciiChart(start, end) {
  let asciiDec = start;
  let obj = {};
  for (let index = 1; index <= end - start; index++) {
    let char = String.fromCharCode(asciiDec);
    obj[char] = index;
    asciiDec++;
  }

  return obj;
}

// console.log(ceasersChiper("apple", 3));
