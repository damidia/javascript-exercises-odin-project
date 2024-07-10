const sumAll = function(firstNumber, secondNumber) {
  let sum = 0;
  if (firstNumber <= secondNumber) {
    for (let i = firstNumber; i <= secondNumber; i++) {
      sum += i;
    }
  } else {
    for (let i = secondNumber; i >= firstNumber; i--) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumAll(1, 4))
console.log(sumAll(1, 4000));
console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
