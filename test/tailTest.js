const tail = require("../tail");
const assert = require("chai").assert;

describe("#Tail", () => {
  it("should return [2, 3, 4, 5] when given [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  it("should return ['LightHouse', 'Labs'] when given ['YAY', 'LightHouse', 'Labs']", () => {
    assert.deepEqual(tail(['YAY', 'LightHouse', 'Labs']), ['LightHouse', 'Labs']);
  });
  it("should not change the input array length when given [1, 2, 3], ", () => {
    let array = [1, 2, 3];
    assert.deepEqual(tail(array), [2, 3]);
    assert.strictEqual(array.length, 3);
  });
});

