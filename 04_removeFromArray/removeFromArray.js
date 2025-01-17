const removeFromArray = function(array, ...args) {
  let newArray = [...array];
  let index;
  for (const arg of args) {
    do {
      index = newArray.indexOf(arg);
      if (index !== -1) {
        newArray.splice(index, 1);
      }
    } while (index !== -1);
  }
  
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
