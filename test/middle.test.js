const assertArraysEqual = require("../assertArrayEqual");
const middle = require("../middle");
const eqArrays = require("../eqArray");

assertArraysEqual(middle([10, 8, 5, 7, 9, 12, 24, 53]), [7, 9], eqArrays);
assertArraysEqual(middle([10, 8, 5, 7, 99, 9, 12, 24, 53]), [99], eqArrays);
assertArraysEqual(middle([10]), [], eqArrays);
assertArraysEqual(middle([10, 8]), [], eqArrays);