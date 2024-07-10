const reverseString = function(string) {
  let characters = string.split("");
  let charactersReversed = characters.reverse();
  let reversedString = charactersReversed.join("")
  return reversedString;
};

console.log(reverseString('reverses multiple words'));

// Do not edit below this line
module.exports = reverseString;
