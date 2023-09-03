/**
 * Nesta atividade, você deve criar um código em JavaScript 
 * com uma matriz bidimensional para armazenar informações 
 * sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes 
informações sobre ele, como nome, espécie e idade.
 */

// Criação de uma matriz bidimensional para armazenar informações sobre os animais
const animais = [
    // Animal 1
    { nome: "Leão", especie: "Felino", idade: 5 },
    
    // Animal 2
    { nome: "Elefante", especie: "Mamífero", idade: 15 },
    
    // Animal 3
    { nome: "Tigre", especie: "Felino", idade: 7 },
    
    // Adicione mais animais aqui
  ];
  
  // Exemplo de como acessar informações sobre os animais
  console.log("Nome do primeiro animal: " + animais[0].nome);
  console.log("Espécie do segundo animal: " + animais[1].especie);
  console.log("Idade do terceiro animal: " + animais[2].idade);
  
  // Adicione mais animais à matriz
  animais.push({ nome: "Girafa", especie: "Mamífero", idade: 10 });
  
  // Acesse informações do animal recém-adicionado
  console.log("Nome do quarto animal: " + animais[3].nome);
  
  // Modifique informações de um animal
  animais[0].idade = 6;
  console.log("Nova idade do primeiro animal: " + animais[0].idade);
  