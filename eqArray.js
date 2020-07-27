// Main code
const eqArrays = (array1, array2) => {
  if (!(Array.isArray(array1) && Array.isArray(array2))) {
    return false;
  }
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

module.exports = eqArrays;

// // Assertion code/ Reference code
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅: [${actual}] === [${expected}]`);
//   } else {
//     console.log(`❌: [${actual}] !== [${expected}]`);
//   }
// };


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", 3], ["1", "2", 3]), true);
// assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), false);
