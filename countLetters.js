const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌: [${actual}] !== [${expected}]`);
  }
};

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
  console.log(result);
  return result;
};



// Code for testing
let testString = "Hello WOrld A a AA ";
let toTest = countLetter(testString);
assertEqual(toTest["o"], 2);
assertEqual(toTest["h"], 1);
assertEqual(toTest["l"], 3);