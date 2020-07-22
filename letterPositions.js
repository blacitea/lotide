// Main code
const letterPositions = function (sentence) {
  const result = {};

  return result;
};


// Assertion code
const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2, evaluator) => {
  return evaluator(arr1, arr2) ? console.log(`✅ It's an exact match! ${arr1} === ${arr2}`) : console.log(`❌ No they are not the same! ${arr1} !== ${arr2}`);
};

// Test code

let testSentence = "hello";
let toTest = letterPositions(testSentence);
assertArraysEqual(toTest["h"], [0], eqArrays);
assertArraysEqual(toTest["e"], [1], eqArrays);
assertArraysEqual(toTest["l"], [2, 3], eqArrays);
assertArraysEqual(toTest["o"], [4], eqArrays);