/**
 Considerre que:
 -os produtos devem implementar uma interface comum;
 -o cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato da interface;
 -todo computador deve ter, com getters, os atributos: ram, hdd, cpu e type;
 -há dois tipos de computadores: pc e server; -RAM e HD devem estar em GB;
 -CPU deve estar em GHZ;
 -através do tipo informado, a fábrica decide qual tipo de computador irá instanciar;
 -quando o método .toString() for aplicado a um computador, ele deve imprimir seus atributos.
 */

 // Interface comum para os produtos (Computadores)
class Computer {
    constructor(ram, hdd, cpu) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }

    getRAM() {
        return this.ram;
    }

    getHDD() {
        return this.hdd;
    }

    getCPU() {
        return this.cpu;
    }

    getType() {
        throw new Error("Método getType() deve ser implementado nas classes filhas.");
    }

    toString() {
        return `${this.getType()} - RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
    }
}

// Implementação do produto PC
class PC extends Computer {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu);
    }

    getType() {
        return "PC";
    }
}

// Implementação do produto Server
class Server extends Computer {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu);
    }

    getType() {
        return "Server";
    }
}

// Fábrica abstrata para criar instâncias de computadores
class ComputerFactory {
    createComputer(ram, hdd, cpu) {
        // Decide qual tipo de computador instanciar com base em alguma lógica
        // Neste exemplo simples, criamos PCs para RAM <= 8GB e Servers para RAM > 8GB
        if (parseInt(ram) <= 8) {
            return new PC(ram, hdd, cpu);
        } else {
            return new Server(ram, hdd, cpu);
        }
    }
}

// Exemplo de uso
const computerFactory = new ComputerFactory();

// Cria um PC com 4GB de RAM, 500GB de HDD e CPU de 2.4GHz
const pc = computerFactory.createComputer("4", "500", "2.4");
console.log(pc.toString());

// Cria um Server com 16GB de RAM, 1TB de HDD e CPU de 3.0GHz
const server = computerFactory.createComputer("16", "1000", "3.0");
console.log(server.toString());
