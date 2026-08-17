export function analyzeArray(arr) {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("Please provide an array.");
    }
    if (arr.some((item) => isNaN(item))) {
      throw new Error("Error: array contains invalid items.");
    }
    return {
      length: arr.length,
      average: +(arr.reduce((sum, item) => sum + item, 0) / arr.length).toFixed(
        2,
      ),
      min: Math.min(...arr),
      max: Math.max(...arr),
    };
  } catch (err) {
    throw err.message;
  }
}
