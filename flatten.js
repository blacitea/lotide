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

const flatten = nestedArray => {
  let array = [];
  for (let element of nestedArray) {
    if (Array.isArray(element)) {
      //array.push(...element);
      for (let item of element) {
        array.push(item);
      }
    } else {
      array.push(element);
    }
  }
  return array;
};

let bagOfCandies = [1, 2, [3, 4], 5, [6]];
let angelsCandies = [1, [2, 7], [3, 4], 5, [6]];

assertArraysEqual(flatten(bagOfCandies), [1, 2, 3, 4, 5, 6], eqArrays);
assertArraysEqual(flatten(angelsCandies), [1, 2, 7, 3, 4, 5, 6], eqArrays);