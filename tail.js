const assertEqual = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    console.log(`✅: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌: [${actual}] !== [${expected}]`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

assertEqual(tail([1, 2, 3, 4, 5]), [1]);
assertEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
assertEqual(tail([1, 2, "hi", 4, ","]), [2, "hi", 4, ","]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words), ["Lighthouse", "Labs"]);
assertEqual(words.length, 3);