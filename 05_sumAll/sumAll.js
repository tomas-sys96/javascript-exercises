const sumAll = function(a, b) {
  if (!validNumbers(a, b)) {
    return "ERROR";
  }

  return (Math.abs(a - b) + 1) * (a + b) / 2;
};

function isNegative(num) {
  return num < 0;
}

function isNonInteger(num) {
  return Math.floor(num) !== num;
}

function isNonNumber(num) {
  return typeof num !== "number";
}

function validNumbers(a, b) {
  for (const num of [a, b]) {
    if (isNegative(num) || isNonInteger(num) || isNonNumber(num)) {
      return false;
    }
  }

  return true;
}

// Do not edit below this line
module.exports = sumAll;
