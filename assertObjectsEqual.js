// Main code
const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅ You got it!, ` + actual + " === " + expected);
  } else {
    console.log(`❌ That's not right! ${actual} !== ${expected}`);
  }
};

// Assertion code/ Reference code
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

// Test code
let dog1 = { name: "Stormy", owner: ["Peter", "Vennsa"] };
let dog2 = { name: "Stormy", owner: ["Peter", "Vennsa"] };
let dogfake = { name: "Stormy", owner: ["Peter", "Vennsa", "Mike"] };
let dog3 = { name: "Stormy", favFood: "Fish skin jerky", age: 5 };
let dog4 = { name: "Blizz", favFood: "Fish skin jerky", age: 7 };
let dog5 = { name: "Blizz", quickFact: { favFood: "Fish skin jerky", age: 7 } };
let dog6 = { name: "Blizz", quickFact: { favFood: "Fish skin jerky", age: 7 } };
let dog7 = { name: "Blizz", quickFact: { favFood: "Fish skin jerky", age: 7, gender: "female" } };

assertObjectsEqual(dog1, dog2); // true
assertObjectsEqual(dog2, dogfake); // false
assertObjectsEqual(dog3, dog4); // false
//assertObjectsEqual(dog5, dog6); // true - not working because eqObjects is not ready for nested object yet
//assertObjectsEqual(dog5, dog7); // false - not working because eqObjects is not ready for nested object yet
