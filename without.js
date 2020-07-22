const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return eqArrays;
};

const assertArraysEqual = (arr1, arr2, evaluator) => {
  return evaluator(arr1, arr2) ? console.log(`✅ It's an exact match!`) : console.log(`❌ No they are not the same`);
};

/*
input = 1/items to check 2/items to exclude
Not to check the original list
loop from item 1 to item n of List 1,
  if not match with any from list 2
  push to result list
end loop and return result list
*/

const without = (items, exceptions) => {
  let ret = [];
  for (let item of items) {
    if (!exceptions.includes(item)) {
      ret.push(item);
    }
  }
  return ret;
};
assertArraysEqual(without([1, "2", 3], [1]), [2, 3], eqArrays);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3], eqArrays);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"], eqArrays);
assertArraysEqual(without(["1", 1, "Lighthouse"], ["Lighthouse"]), ["1"], eqArrays);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"], eqArrays);
assertArraysEqual(words, ["hello", "world", "lighthouse"],eqArrays);