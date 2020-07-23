// Assertion code
const assertArraysEqual = (arr1, arr2, evaluator) => {
  return evaluator(arr1, arr2) ? console.log(`✅ It's an exact match! ${arr1} === ${arr2}`) : console.log(`❌ No they are not the same! ${arr1} !== ${arr2}`);
};


// Assertion code / Reference code
const eqArrays = function(array1, array2) {
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

// Main code
const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  const results = [];
  for (let element of array) {
    results.push(callback(element));
  }
  return results;
};

// Test code
const result1 = map(words, word => word[0]);
console.log(result1);

const result2 = map(words, word => word.length);
assertArraysEqual(result2, [6, 7, 2, 5, 3], eqArrays);


