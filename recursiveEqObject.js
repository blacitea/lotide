// Main code
const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    if (obj1[key] instanceof Object) {
      if (!eqObjects(obj1[key], obj2[key])) {
        return false;
      }
    } else if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
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

// Code for testing recursive
// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true

// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false

// Code for testing primitives as value

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const def = { e: "2", a: "1", c: "3" };
const efd = { a: "1", e: "2", c: "3" };

const w = { z : 1 };
const x = { x : 1 };
const y = { y: 1, x:{ x: 1 }, z : 1 };
const z = { x: { x: 1 }, z : 1, y : 1 };

//assertEqual(ab["a"], ba["a"]); // eval true
//assertEqual(ab["b"], ba["a"]); // eval false

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ba, abc), false);
// assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(def, abc), false);
assertEqual(eqObjects(def, efd), true);
assertEqual(eqObjects(w, x), false);
assertEqual(eqObjects(y, z), true);

// Code for testing array as value
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
// assertEqual(eqObjects(cd, cd2), false); // => false

// const cd3 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd3, cd2); // => true
// assertEqual(eqObjects(cd3, cd2), true); // => true
