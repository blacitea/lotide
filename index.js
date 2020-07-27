const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const assertArraysEqual = require("./assertArrayEqual");
const assertEqual = require("./assertEqual");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const eqArrays = require("./eqArray");
const eqObjects = require("./eqObjects");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const flatten = require("./flatten");
const letterPositions = require("./letterPositions");
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");


module.exports = {
  head,
  tail: tail,
  middle: middle,
  assertArraysEqual,
  assertEqual: assertEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without,
};