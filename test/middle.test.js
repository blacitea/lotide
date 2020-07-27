const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("should return 99 when given [10, 8, 5, 7, 99, 9, 12, 24, 53]", () => {
    assert.deepEqual(middle([10, 8, 5, 7, 99, 9, 12, 24, 53]), [99]);
  });
  it("should return [7, 9] when given [10, 8, 5, 7, 9, 12, 24, 53]", () => {
    assert.deepEqual(middle([10, 8, 5, 7, 99, 9, 12, 24, 53]), [99]);
  });
  it("should return undefined when given [6]", () => {
    assert.deepEqual(middle([6]), []);
  });
  it("should return undefined when given [6, 10]", () => {
    assert.deepEqual(middle([6]), []);
  });
});

