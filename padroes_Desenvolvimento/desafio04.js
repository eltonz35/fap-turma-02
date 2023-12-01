/**
Aplique o padrão de projeto decorator para criar um sanduíche de frango
assado com pepperoni e queijo mussarela ralado. O projeto deve seguir os seguintes critérios:
- deve imprimir no console: Sanduíche de Carne, Bacon, QueijoMussarela Ralado custa $7,49.
-o sanduíche de frango assado custa $4,50. - o ingrediente adicional pepperoni custa $0,99.
- o ingrediente adicional queijo mussarela ralado custa $2,00.
- crie as classes necessárias: FrangoAssado, Pepperoni e Queijo MussarelaRalado.
 */

// Interface para os sanduíches
class Sanduiche {
    getDescricao() {
        throw new Error("Método getDescricao deve ser implementado nas classes filhas.");
    }

    getCusto() {
        throw new Error("Método getCusto deve ser implementado nas classes filhas.");
    }
}

// Implementação do sanduíche de Frango Assado
class FrangoAssado extends Sanduiche {
    getDescricao() {
        return "Sanduíche de Frango Assado";
    }

    getCusto() {
        return 4.50;
    }
}

// Decorator para o pepperoni
class Pepperoni extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    getDescricao() {
        return `${this.sanduiche.getDescricao()}, Pepperoni`;
    }

    getCusto() {
        return this.sanduiche.getCusto() + 0.99;
    }
}

// Decorator para o queijo mussarela ralado
class QueijoMussarelaRalado extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    getDescricao() {
        return `${this.sanduiche.getDescricao()}, Queijo Mussarela Ralado`;
    }

    getCusto() {
        return this.sanduiche.getCusto() + 2.00;
    }
}

// Programa principal
const sanduicheFrangoAssado = new FrangoAssado();
const sanduichePepperoni = new Pepperoni(sanduicheFrangoAssado);
const sanduicheFinal = new QueijoMussarelaRalado(sanduichePepperoni);

console.log(`${sanduicheFinal.getDescricao()} custa $${sanduicheFinal.getCusto().toFixed(2)}.`);
