const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌: [${actual}] !== [${expected}]`);
  }
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
assertEqual(eqArrays(without([1, 2, 3], [1]), [2, 3]), true);
assertEqual(eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]), true);
assertEqual(eqArrays(without(["1", 1, "Lighthouse"], [1, "Lighthouse"]), ["1"]), true);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertEqual(eqArrays(without(words, ["lighthouse"]), ["hello", "world"]), true);
assertEqual(eqArrays(words, ["hello", "world", "lighthouse"]),true);