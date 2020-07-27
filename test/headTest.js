const chai = require("chai");
const assert = chai.assert;
const head = require("../head");

describe("#head", () => {
  it("return 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns 5 for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns a for ['a', 'e', 'i', 'o', 'u']", () => {
    assert.strictEqual(head(['a', 'e', 'i', 'o', 'u']), 'a');
  });
  it("returns hot cocoa for ['hot cocoa']", () => {
    assert.strictEqual(head(['hot cocoa']), 'hot cocoa');
  });
  it("returns undefined for [empty array]", () => {
    assert.strictEqual(head([]), undefined);
  });
});