const leapYears = function(year) {
  let isYearDivisibleBy4 = year % 4 === 0;
  let isCentury = year % 100 === 0;
  let isYearDivisibleByFourHundred = year % 400 === 0;

  if (isYearDivisibleBy4 && (!isCentury || isYearDivisibleByFourHundred)) {
    return true;
  } else {
    return false;
  }
};

console.log(leapYears(1996));
console.log(leapYears(1997));
console.log(leapYears(34992));
console.log(leapYears(1900));
console.log(leapYears(1600));
console.log(leapYears(700));
// Do not edit below this line
module.exports = leapYears;
