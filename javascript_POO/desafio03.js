/**
 * Com os conceitos aprendidos, crie um programa de calculadora que:
 * 
 * -receba dois valores, que devem ser salvos em variáveis;
 * -o usuario deve colocar qul operador ele vai utilizar por meio dos símbolos aitméticos;
 * -co os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado;
 * -se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma.
 */

function calcular(valor1, valor2, operador) {
    let resultado;

    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            
            if (valor2 !== 0) {
                resultado = Math.floor(valor1 / valor2);  
                const sobra = valor1 % valor2;  
                return `Resultado: ${resultado}, Sobras: ${sobra}`;
            } else {
                return 'Erro: Divisão por zero.';
            }
        default:
            return 'Operador inválido';
    }

    return `Resultado: ${resultado}`;
}

// Exemplo de uso
const valor1 = parseFloat(prompt('Digite o primeiro valor:'));
const valor2 = parseFloat(prompt('Digite o segundo valor:'));
const operador = prompt('Digite o operador (+, -, *, /):');

const resultado = calcular(valor1, valor2, operador);
console.log(resultado);
