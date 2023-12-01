/**
Aplique o padrão de projeto Observer para criar um simples editor de texto.
Considere a solução apresentada no Hipertexto 6 e utilize o código visto
para implementar novas classes. Os requisitos para avaliar o projeto são:
- implementar uma subclasse da classe Editor chamada TextEditor;
- aplicar o método insertLine, que recebe os parâmetros lineNumber e text;
- inserir o texto na ordem correspondente a lineNumber e deslocar as linhas posteriores se necessário;
- aplicar o método removeLine, que recebe lineNumber como parâmetro, deleta o texto da linha correspondente e desloca as linhas posteriores se necessário;
- instanciar um TextEditor e disparar o evento "open";
- receber as linhas de texto, que serão inseridas no objeto textEditor, do usuário até que ele envie o texto "EOF", que não deve ser inserido no objeto textEditor;
-por fim, o textEditor deve disparar o evento "save" para que o conteúdo seja salvo no arquivo configurado e imprimir todo o conteúdo do arquivo na tela.
 */

// Classe Observer
class Observer {
    update() {
        throw new Error("Método update deve ser implementado nas classes filhas.");
    }
}

// Classe Subject
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify() {
        this.observers.forEach(observer => observer.update());
    }
}

// Implementação concreta do Observer para exibir o conteúdo
class TextView extends Observer {
    constructor(editor) {
        super();
        this.editor = editor;
    }

    update() {
        console.log("Conteúdo do Editor:");
        console.log(this.editor.getText());
    }
}

// Implementação concreta do Subject para o Editor
class Editor extends Subject {
    constructor() {
        super();
        this.text = [];
    }

    getText() {
        return this.text.join('\n');
    }

    insertLine(lineNumber, text) {
        this.text.splice(lineNumber - 1, 0, text);
        this.notify();
    }

    removeLine(lineNumber) {
        this.text.splice(lineNumber - 1, 1);
        this.notify();
    }

    open() {
        console.log("Editor aberto.");
        this.notify();
    }

    save() {
        console.log("Conteúdo salvo no arquivo.");
    }
}

// Subclasse da classe Editor chamada TextEditor
class TextEditor extends Editor {
    insertLine(lineNumber, text) {
        super.insertLine(lineNumber, text);
        console.log(`Linha ${lineNumber} inserida: ${text}`);
    }

    removeLine(lineNumber) {
        super.removeLine(lineNumber);
        console.log(`Linha ${lineNumber} removida.`);
    }
}

// Programa principal
const textEditor = new TextEditor();
const textView = new TextView(textEditor);
textEditor.addObserver(textView);

textEditor.open();

console.log("Insira linhas de texto. Digite 'EOF' para encerrar.");

let lineNumber = 1;
let userInput = prompt(`Linha ${lineNumber}: `);

while (userInput !== 'EOF') {
    textEditor.insertLine(lineNumber, userInput);
    lineNumber++;
    userInput = prompt(`Linha ${lineNumber}: `);
}

textEditor.save();
