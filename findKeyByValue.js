// Main Code
const findKeyByValue = function(checkObject, searchValue) {
  let result;
  for (let key in checkObject) {
    if (checkObject[key] === searchValue) {
      result = key;
    }
  }
  return result;
};

// Code for assertion
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌: [${actual}] !== [${expected}]`);
  }
};

// Code for test
const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestTea = {
  winter: "Pepper mint",
  spring: "Macha green tea",
  summer: "Iced peach tea",
  autumn: "Roasted rice tea",
  anytime: "",
};

assertEqual(findKeyByValue(bestTea, "Iced peach tea"), "spring");
assertEqual(findKeyByValue(bestTea, "Iced peach tea"), "summer");
assertEqual(findKeyByValue(bestTea, "Hot cocoa"), "winter");
assertEqual(findKeyByValue(bestTea, "Hot cocoa"), undefined);
assertEqual(findKeyByValue(bestTea, undefined), undefined);