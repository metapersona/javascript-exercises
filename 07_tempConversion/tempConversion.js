const convertToCelsius = function(num) {
  let answer = (num - 32) * 5/9;
  let tempC = Math.round(answer * 10) / 10;
  return tempC


};

const convertToFahrenheit = function(num) {
  let answer = (num * 9/5) + 32;
  let tempF = Math.round(answer * 10) / 10;
  return tempF
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
