// Main code
const eqObject = function (obj1, obj2) {

};










// Code for assertion
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌: [${actual}] !== [${expected}]`);
  }
};

// Code for testing
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(ab["a"], ba["a"]);
assertEqual(ab["b"], ba["a"]);

eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false