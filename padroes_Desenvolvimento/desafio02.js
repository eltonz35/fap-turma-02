/**
Crie uma fábrica de veículos utilizando o padrão Prototype
com base no exemplo apresentado no Hipertexto 2. Os requisitos do projeto devem ser:
- implemente uma classe abstrata Veículo com um construtor padrão e os métodos clone e represent;
-o construtor da classe Veículo deve receber modelo, marca, cor e numero Rodas como parâmetros;
- crie pelo menos duas subclasses da classe Veículo, que acrescentem um ou mais atributos, por exemplo: carro que tem dois campos a mais, como numeroRodas e numeroPortas;
- desenvolva uma classe Aplicação que deve criar um array com seis veículos com dois tipos de veículos diferentes (subclasses), utilizando o método clone dos objetos para preencher o array,
- na classe Aplicação, implemente um método que retorne um array com o mesmo tamanho do array de veículos, onde cada elemento deve ser um clone dos elementos do array veículos;
-no final, deve imprimir na tela o retorno da função represent de cada elemento desse novo array de clones de veículos.
 */

// Classe abstrata Veículo
class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone() {
        // Cria uma instância do mesmo tipo (classe) e copia os atributos
        return new this.constructor(this.modelo, this.marca, this.cor, this.numeroRodas);
    }

    represent() {
        // Retorna uma representação do veículo
        return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
    }
}

// Subclasse Carro que estende Veiculo
class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
    }

    clone() {
        // Chama o método clone da classe pai e ajusta os atributos específicos da subclasse
        const clonedCarro = super.clone();
        clonedCarro.numeroPortas = this.numeroPortas;
        return clonedCarro;
    }

    represent() {
        // Chama o método represent da classe pai e adiciona informações específicas da subclasse
        return super.represent() + `, Portas: ${this.numeroPortas}`;
    }
}

// Classe Aplicação
class Aplicacao {
    static criarArrayDeVeiculos() {
        // Cria um array com seis veículos usando o método clone
        const veiculos = [];
        const carroPrototype = new Carro("Fusca", "Volkswagen", "Azul", 4, 2);

        for (let i = 0; i < 6; i++) {
            veiculos.push(carroPrototype.clone());
        }

        return veiculos;
    }

    static clonarArrayDeVeiculos(veiculos) {
        // Cria um array de clones dos veículos
        const clones = [];

        for (const veiculo of veiculos) {
            clones.push(veiculo.clone());
        }

        return clones;
    }

    static imprimirRepresentacaoDosVeiculos(veiculos) {
        // Imprime a representação de cada veículo no array
        for (const veiculo of veiculos) {
            console.log(veiculo.represent());
        }
    }
}

// Uso da aplicação
const veiculos = Aplicacao.criarArrayDeVeiculos();
const clones = Aplicacao.clonarArrayDeVeicu
