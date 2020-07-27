// Main code
const assertArraysEqual = (arr1, arr2, evaluator) => {
  return evaluator(arr1, arr2) ? console.log(`✅ It's an exact match! ${arr1} === ${arr2}`) : console.log(`❌ No they are not the same! ${arr1} !== ${arr2}`);
};

module.exports = assertArraysEqual;