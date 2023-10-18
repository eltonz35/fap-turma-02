/**
 * Crie um programa que contenha os seguintes tipos de funções:
 * 
 * -uma função tradicional com a palavra reservada "Function" e sem nenhum parâmetro;
 * -uma função tradicional com parâmetros e um retorno de valor;
 * -uma arrow function com parâmetros e que retorne um valor.
 * 
 * Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.
 */

// Função tradicional sem parâmetros
function exibirMensagem() {
    console.log("Bem-vindo à calculadora!");
  }
  
  // Função tradicional com parâmetros e retorno
  function somar(a, b) {
    return a + b;
  }
  
  // Arrow function com parâmetros e retorno
  const multiplicar = (a, b) => a * b;
  
  // Utilizando as funções
  exibirMensagem();
  
  const num1 = 5;
  const num2 = 3;
  
  const resultadoSoma = somar(num1, num2);
  console.log(`A soma de ${num1} e ${num2} é: ${resultadoSoma}`);
  
  const resultadoMultiplicacao = multiplicar(num1, num2);
  console.log(`A multiplicação de ${num1} e ${num2} é: ${resultadoMultiplicacao}`);
  