/**
 * Calculadora de média
 */

const prompt = require("prompt-sync")();

let nota1 = Number(prompt("Insira o primeiro numero de 1 a 10: "));
let nota2 = Number(prompt("Insira o segundo numero de 1 a 10: "));
let nota3 = Number(prompt("Insira o terceiro numero de 1 a 10: "));
let media = (nota1 + nota1 + nota3) / 3;

console.log(`A media das notas é: ${media}`);