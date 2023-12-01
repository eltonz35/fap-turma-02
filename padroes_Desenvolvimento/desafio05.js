/**
Crie um adaptador que permita que um objeto do tipo Pato
seja usado como se fosse um objeto do tipo Galinha.
Siga o exemplo apresentado no Hipertexto 4 e crie as classes AdaptadorPato
e AdaptadorPatoDemo para demonstrar o uso da classe AdaptadorPato.
 */

// Interface para Pato
class Pato {
    quack() {
        throw new Error("Método quack deve ser implementado nas classes filhas.");
    }

    voar() {
        throw new Error("Método voar deve ser implementado nas classes filhas.");
    }
}

// Implementação do PatoReal
class PatoReal extends Pato {
    quack() {
        console.log("Quack! Quack!");
    }

    voar() {
        console.log("Voando como um pato real");
    }
}

// Interface para Galinha
class Galinha {
    cacarejar() {
        throw new Error("Método cacarejar deve ser implementado nas classes filhas.");
    }

    voarCurto() {
        throw new Error("Método voarCurto deve ser implementado nas classes filhas.");
    }
}

// Implementação da GalinhaComum
class GalinhaComum extends Galinha {
    cacarejar() {
        console.log("Cocoricó!");
    }

    voarCurto() {
        console.log("Voando curto, como uma galinha comum");
    }
}

// Adaptador para transformar um Pato em uma Galinha
class AdaptadorPato extends Galinha {
    constructor(pato) {
        super();
        this.pato = pato;
    }

    cacarejar() {
        this.pato.quack();
    }

    voarCurto() {
        this.pato.voar();
    }
}

// Demonstração do uso do AdaptadorPato
class AdaptadorPatoDemo {
    static main() {
        const patoReal = new PatoReal();
        const galinhaComum = new GalinhaComum();

        console.log("Pato Real:");
        patoReal.quack();
        patoReal.voar();

        console.log("\nGalinha Comum:");
        galinhaComum.cacarejar();
        galinhaComum.voarCurto();

        // Usando o adaptador para transformar o PatoReal em uma Galinha
        const adaptadorPatoReal = new AdaptadorPato(patoReal);

        console.log("\nAdaptador Pato Real usado como Galinha:");
        adaptadorPatoReal.cacarejar();
        adaptadorPatoReal.voarCurto();
    }
}

// Executar a demonstração
AdaptadorPatoDemo.main();
