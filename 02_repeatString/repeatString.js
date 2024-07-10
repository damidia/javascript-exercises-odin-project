const repeatString = function(text, numRepetitions) {
  const repetitions = []
  for (let i = 0; i < numRepetitions; i++) {
    repetitions.push(text);
  }
  return repetitions.toString();
};

console.log(repeatString('hey', 3))

// Do not edit below this line
module.exports = repeatString;
