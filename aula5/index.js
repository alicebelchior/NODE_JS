//importação de módulo de conversor de temperatura
const conversor = require("./temperatureConversor");

var tempC = 25;

var tempF = conversor.celsiusToF(tempC);

console.log(tempF);