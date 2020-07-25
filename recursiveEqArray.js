// Main code
const eqArrays = (array1, array2) => {

  if (!(Array.isArray(array1) && Array.isArray(array2))) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Assertion code/ Reference code
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌: [${actual}] !== [${expected}]`);
  }
};

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
assertEqual(eqArrays([[2, 3], [4, [1, 2, [3]]]], [[2, 3], [4, [1, 2, [3]]]]), true); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", 3], ["1", "2", 3]), true);
// assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), false);
// assertEqual(eqArrays([1, [2, 4], "3"], [1, [2, 4], "3"]), true);
// assertEqual(eqArrays([1, [2, 5], "3"], [1, [2, 4], "3"]), false);

// assertEqual(eqArrays([1, [2, 4, [6]], "3"], [1, [2, 4, [1, 5]], "3"]), false);

// assertEqual(eqArrays([1, [2, 4,["1", 5]], "3"], [1, [2, 4, [1, 5]], "3"]), false);
