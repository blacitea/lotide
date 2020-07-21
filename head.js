const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌: [${actual}] !== [${expected}]`);
  }
};

const head = function(array) {
  return array[0];
};

assertEqual(head([1, 2, 4, 5]), 1);
assertEqual(head([1, 2, 4, 5]), 5);
assertEqual(head(["a", "e", "i", "o", "u"]), "h");
assertEqual(head(["hot cocoa"]), "hot cocoa");
assertEqual(head([ ]), undefined);