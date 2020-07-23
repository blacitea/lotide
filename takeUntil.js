const takeUntil = function(array, callback) {
  const result = [];
  for (let element of array) {
    if (callback(element)) {
      break;
    } else {
      result.push(element);
    }
  }
  return result;
};

// Assertion code / Reference code

const assertArraysEqual = (arr1, arr2, evaluator) => {
  return evaluator(arr1, arr2) ? console.log(`✅ It's an exact match! ${arr1} === ${arr2}`) : console.log(`❌ No they are not the same! ${arr1} !== ${arr2}`);
};

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ], eqArrays);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood'], eqArrays);