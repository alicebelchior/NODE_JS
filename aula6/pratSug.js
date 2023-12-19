function generateMessage(name, age, city) {
  const message = `Olá, meu nome é ${name}, tenho ${age} anos e
moro em ${city}.`;
  return message;
}
const personName = "Alice";
const personAge = 28;
const personCity = "Vila Velha";

const formattedMessage = generateMessage(personName, personAge, personCity);
console.log(formattedMessage);

//a const formattedMessage esta chamado a função generateMessage e passando outras constantes como para metro da função