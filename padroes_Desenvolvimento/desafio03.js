/**
Você é um agente secreto altamente treinado da organização inglesa MI7
e recebeu uma missão crítica: proteger a Base Secreta contra invasões inimigas.
O local contém informações vitais para a segurança mundial e só pode ser acessado
por um único sistema de segurança confiável.
A sua tarefa é implementar um sistema de segurança para a Base Secreta
usando o padrão Singleton em TypeScript. A ideia é que apenas uma instância
do sistema de segurança possa ser criada, garantindo que o local esteja bem protegido.
Instruções:
1) Crie uma classe chamada SistemaSeguranca. Ela deve implementar o padrão Singleton. Certifique-se de que apenas uma instância da classe possa ser criada;
2) A classe SistemaSeguranca deve ter um método chamado acessarBaseSecreta. Ele verifica se a senha inserida pelo agente coincide com a da Base Secreta. Se estiver correta, o acesso é concedido. Caso contrário, é negado;
3) Crie um programa principal que demonstre o uso do Singleton SistemaSeguranca. No programa, um agente secreto tentará acessar a
Base Secreta inserindo uma senha. Se a senha estiver correta, o acesso será concedido. Caso contrário, será negado.
 */

class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "senhaSuperSecreta123";

    private constructor() {
        // Construtor privado para impedir instâncias adicionais
    }

    static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }

    acessarBaseSecreta(senhaDigitada: string): void {
        if (senhaDigitada === this.senhaBaseSecreta) {
            console.log("Acesso concedido à Base Secreta. Missão bem-sucedida!");
        } else {
            console.log("Senha incorreta. Acesso negado. Chame reforços!");
        }
    }
}

// Programa principal
const sistemaSeguranca1 = SistemaSeguranca.getInstance();
const sistemaSeguranca2 = SistemaSeguranca.getInstance();

console.log(sistemaSeguranca1 === sistemaSeguranca2); // Deve ser true, pois é a mesma instância

// Tentativa de acesso à Base Secreta
sistemaSeguranca1.acessarBaseSecreta("senhaIncorreta"); // Acesso negado

sistemaSeguranca1.acessarBaseSecreta("senhaSuperSecreta123"); // Acesso concedido
