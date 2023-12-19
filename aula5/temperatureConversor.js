/*
"Celsius -> Fahrenheit"
Multiplica-se a temperatura ºC por 1,8 e adiciona 32 ao resultado

"Fahrenheit -> Celsius
Subtrai-se 32 da temperatura ºF e divide-o por 1,8
 */

function celsiusToF(tempC) {
  return tempC * 1.8 + 32;
}

function fahrenheitToCelsius(tempF) {
  return (tempF - 32) / 1.8;
}

//exportação de funções para torná-las acessíveis para outros arquivos
module.exports = {
  celsiusToF,
  fahrenheitToCelsius,
};