/**
 * Utilizando a linguagem javascript, crie uma situação matematica na qual os números
 * precisam ser informados pelo usuário. Além disso, deve ocorrer uma excessão dentro 
 * do código. Utilize os métodos try(), catch(), e finally() para realizar a captura
 * e o tratamento dessa exceção.
 */

// Função que realiza a operação de divisão
function realizarDivisao(numero1, numero2) {
    if (numero2 === 0) {
      throw new Error('Não é possível dividir por zero.');
    }
  
    return numero1 / numero2;
  }
  
  // Solicitar números ao usuário
  let num1 = prompt('Informe o primeiro número:');
  let num2 = prompt('Informe o segundo número:');
  
  try {
    // Converter os números para tipos numéricos
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
  
    // Tentar realizar a divisão
    const resultado = realizarDivisao(num1, num2);
    console.log(`O resultado da divisão é: ${resultado}`);
  } catch (error) {
    // Capturar exceções e exibir uma mensagem amigável
    console.error(`Erro: ${error.message}`);
  } finally {
    // Executar código que deve ocorrer independentemente de haver ou não exceção
    console.log('Operação concluída.');
  }
  