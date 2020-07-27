const eqArrays = require("../eqArray");
const assertEqual = require("../assertEqual");
const tail = require("../tail");

assertEqual(eqArrays(tail([1, 2, 3, 4, 5]), [1]), false); // false
assertEqual(eqArrays(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]), true); // true

assertEqual(eqArrays(tail([1, 2, "hi", 4, ","]), [2, 'hi', 4, ',']), true);
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(eqArrays(tail(words), ["Lighthouse", "Labs"]), true);
assertEqual(words.length, 3);
