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
  return evaluator(arr1, arr2) ? console.log(`✅ It's an exact match!`) : console.log(`❌ No they are not the same`);
};

// Code for identifying the middle child
const findMid = array => Math.floor(array.length / 2);
const grabMid = (array) => {
  return array.length % 2 ? findMid(array) : [array[findMid(array) - 1], array[findMid(array)]];
};
const middle = array => {
  let middleChild = [];
  if (array.length > 2) {
    middleChild.push(...grabMid(array));
  }
  return middleChild;
};

assertArraysEqual(middle([10, 8, 5, 7, 9, 12, 24, 53]), [7, 9], eqArrays);