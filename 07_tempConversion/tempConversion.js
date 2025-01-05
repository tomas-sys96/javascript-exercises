const convertToCelsius = function(temperature) {
  const inCelsius = (temperature - 32) * 5 / 9;
  return Math.round(inCelsius * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  const inFahrenheit = temperature * 9 / 5 + 32;
  return Math.round(inFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
