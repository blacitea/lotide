const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  // console.log('array', array);
  // console.log('callback function', callback);
  for (let element of array) {
    console.log(element);
    console.log(callback(element));
    console.log("----");
  }

  const results = [];
  return results;

}

const result1 = map(words, word => word[0]);
console.log(result1);