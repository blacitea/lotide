const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌: [${actual}] !== [${expected}]`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamps");
assertEqual(1, 1);
//Comparing identical strings
assertEqual("How are you today", "How are you today");
//Comparing same strings with different upper/lower case
assertEqual("HOW ARE you today", "How are you today");
//Comparing non-identical strings
assertEqual("I like ice-cream", "I like hotpot");
//Comparing identical numbers
assertEqual(101, 101);
//Comparing non-identical numbers
assertEqual(9, 15);
//Comparing numbers and number string
assertEqual(9, "9");