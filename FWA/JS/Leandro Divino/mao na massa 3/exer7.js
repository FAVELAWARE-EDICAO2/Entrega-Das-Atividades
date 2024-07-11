const strings = ["apple", "banana", "grape", "kiwi", "pear", "orange"];
const filteredStrings = strings.filter((str) => str.length >= 5);

const upperCaseStrings = filteredStrings.map((str) => str.toUpperCase());
const sortedStrings = upperCaseStrings.sort();
console.log(sortedStrings)