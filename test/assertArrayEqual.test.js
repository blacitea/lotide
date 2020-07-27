const assertArraysEqual = require("../assertArrayEqual");
const eqArrays = require("../eqArray");

console.log("identical");
assertArraysEqual([1, 2, 3], [1, 2, 3], eqArrays);
console.log("number vs number string - false");
assertArraysEqual(["1", "2", 3], [1, "2", "3"], eqArrays);
console.log("number vs number string - true");
assertArraysEqual([1, "2", 3], [1, "2", 3], eqArrays);