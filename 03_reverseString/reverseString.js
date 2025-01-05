const reverseString = function(string) {
  let reversed = "";
  const stringLength = string.length;

  for (let i = 0; i < stringLength; i++) {
    reversed += string[(stringLength - 1) - i];
  }

  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
