/**
Considerando a solução apresentada no Hipertexto 5, aplique o padrão de projeto Strategy
para criar uma simples calculadora. Os requisitos para avaliar o projeto são:
-implementar uma interface Strategy com o método abstrato execute(). Deve haver três classes concretas que implementam a Strategy para realizar as operações de Soma, Subtração e Multiplicação de números inteiros;
- o método execute() deve receber dois números inteiros como parâmetros e retornar o resultado também como número inteiro;
- como input do usuário, a aplicação deve receber o primeiro valor, depois o segundo e, por último, a operação matemática que deve realizar;
-no final, a aplicação deve definir qual Strategy será usada, com base na operação informada, e imprimir o resultado da operação.
 */

// Interface Strategy
class OperacaoStrategy {
    execute(num1, num2) {
        throw new Error("Método execute deve ser implementado nas classes filhas.");
    }
}

// Implementação concreta da Strategy para Soma
class SomaStrategy extends OperacaoStrategy {
    execute(num1, num2) {
        return num1 + num2;
    }
}

// Implementação concreta da Strategy para Subtração
class SubtracaoStrategy extends OperacaoStrategy {
    execute(num1, num2) {
        return num1 - num2;
    }
}

// Implementação concreta da Strategy para Multiplicação
class MultiplicacaoStrategy extends OperacaoStrategy {
    execute(num1, num2) {
        return num1 * num2;
    }
}

// Contexto que utiliza a Strategy
class Calculadora {
    constructor(operacaoStrategy) {
        this.operacaoStrategy = operacaoStrategy;
    }

    setOperacaoStrategy(operacaoStrategy) {
        this.operacaoStrategy = operacaoStrategy;
    }

    calcular(num1, num2) {
        return this.operacaoStrategy.execute(num1, num2);
    }
}

// Programa principal
const calculadora = new Calculadora();

const num1 = parseInt(prompt("Digite o primeiro valor: "));
const num2 = parseInt(prompt("Digite o segundo valor: "));
const operacao = prompt("Digite a operação (+ para soma, - para subtração, * para multiplicação): ");

let estrategia;

switch (operacao) {
    case '+':
        estrategia = new SomaStrategy();
        break;
    case '-':
        estrategia = new SubtracaoStrategy();
        break;
    case '*':
        estrategia = new MultiplicacaoStrategy();
        break;
    default:
        console.log("Operação inválida.");
        break;
}

if (estrategia) {
    calculadora.setOperacaoStrategy(estrategia);
    const resultado = calculadora.calcular(num1, num2);
    console.log(`Resultado da operação: ${resultado}`);
}
