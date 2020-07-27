const middle = array => {
  let middleChild = [];
  let midIndex = Math.floor(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2) {
      middleChild = [array[midIndex]];
    } else {
      middleChild = [array[midIndex - 1], array[midIndex]];
    }
  }
  return middleChild;
};

module.exports = middle;