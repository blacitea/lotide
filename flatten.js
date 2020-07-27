// const eqArrays = (array1, array2) => {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = (arr1, arr2, evaluator) => {
//   return evaluator(arr1, arr2) ? console.log(`✅ It's an exact match!`) : console.log(`❌ No they are not the same`);
// };

const flatten = nestedArray => {
  let array = [];
  for (let element of nestedArray) {
    if (Array.isArray(element)) {
      let flattenArray = flatten(element);
      //array.push(...element); spread - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
      for (let item of flattenArray) {
        array.push(item);
      }
    } else {
      array.push(element);
    }
  }
  return array;
};

module.exports = flatten;

// let bagOfCandies = [1, 2, [3, 4], 5, [6]];
// let angelsCandies = [1, [2, 7, [10, 9]], [3, 4], 5, [6]];

// assertArraysEqual(flatten(bagOfCandies), [1, 2, 3, 4, 5, 6], eqArrays);
// assertArraysEqual(flatten(angelsCandies), [1, 2, 7, 10, 9, 3, 4, 5, 6], eqArrays);