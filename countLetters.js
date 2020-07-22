const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌: [${actual}] !== [${expected}]`);
  }
};

// Code for countLetter
const countLetter = function (string) {
  let result = {};
  return result;
};



// Code for testing
let toTest = "LHL";
assertEqual(countLetter(toTest)["L"], 2);
assertEqual(countLetter(toTest)["H"], 1);