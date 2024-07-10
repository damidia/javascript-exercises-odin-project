const removeFromArray = function(array, ...argumentsToRemove) {
  let index;
  for (let argument of argumentsToRemove) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === argument) {
        array.splice(i, 1);
        i--;
      }
    }
  }
  return array
};

console.log(removeFromArray([1, 2, 3, 4], 3));
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
console.log(removeFromArray([1, 2, 2, 3], 2));
console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));

// Do not edit below this line
module.exports = removeFromArray;
