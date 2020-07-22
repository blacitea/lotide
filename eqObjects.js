// Main code
const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    if (obj1[key] instanceof Array) { // alt: if(Array.isArray(obj1[key]))
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};

// Code for assertion
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

// Code for testing primitives as value
/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const def = { a: "1", e: "2", c: "3" };

assertEqual(ab["a"], ba["a"]); // eval true
assertEqual(ab["b"], ba["a"]); // eval false

assertEqual(eqObjects(ab, ba), true); // => should match, eval true
assertEqual(eqObjects(ba, abc), true); // => should NOT match, eval false
assertEqual(eqObjects(ab, abc), false); // => should Not match, eval true
assertEqual(eqObjects(def, abc), false); // => should Not match, eval true
*/
// Code for testing array as value
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false); // => false

const cd3 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd3, cd2); // => true
assertEqual(eqObjects(cd3, cd2), true); // => true
