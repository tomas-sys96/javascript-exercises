const repeatString = function(str, reps) {
  if (reps < 0) {
    return "ERROR";
  }

  let concatenatedString = "";
  for (let i = 0; i < reps; i++) {
    concatenatedString += str;
  }
  return concatenatedString;
};

// Do not edit below this line
module.exports = repeatString;
