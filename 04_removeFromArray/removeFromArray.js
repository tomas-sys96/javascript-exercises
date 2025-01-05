const removeFromArray = function(array, ...args) {
  let newArray = [...array];
  for (const arg of args) {
    newArray.splice(array.indexOf(arg), 1);
  }
  
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
