function processArray(arr) {
  const oddNumbers = arr.filter((num) => num % 2 !== 0);

  const multipliedNumbers = oddNumbers.map((num) => num * 2);

  const sortedNumbers = multipliedNumbers.sort((a, b) => b - a);

  return sortedNumbers;
}

const originalArray = [3, 8, 5, 2, 7, 4, 1];
const resultArray = processArray(originalArray);

console.log("Array resultante:", resultArray);
