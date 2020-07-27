// Code for countLetter
const countLetter = function(string) {
  let result = {};
  let letters = string.split(" ").join("").toLowerCase().split("");
  for (let letter of letters) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetter;


// // Code for testing
// let testString = "Hello WOrld A a AA ";
// let toTest = countLetter(testString);
// assertEqual(toTest["o"], 2);
// assertEqual(toTest["h"], 1);
// assertEqual(toTest["l"], 3);