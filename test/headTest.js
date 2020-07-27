const head = require("../head");
const assertEqual = require("../assertEqual");

assertEqual(head([1, 2, 4, 5]), 1);
assertEqual(head([1, 2, 4, 5]), "1");
assertEqual(head([1, 2, 4, 5]), 5);
assertEqual(head(["a", "e", "i", "o", "u"]), "h");
assertEqual(head(["a", "e", "i", "o", "u"]), "a");
assertEqual(head(["hot cocoa"]), "hot cocoa");
assertEqual(head([ ]), undefined);