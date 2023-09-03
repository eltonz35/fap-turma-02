/**
 * Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações,
alterando uma cor e uma idade. Ao terminar, imprima novamente todas 
as informações das três listas.
 */

// Criando as listas
const nomes = ["João", "Maria", "Pedro", "Ana", "Lucas", "Lúcia", "Carlos", "Sofia", "Miguel", "Laura"];
const idades = [25, 30, 22, 28, 35, 19, 27, 32, 24, 29];
const coresFavoritas = ["Azul", "Vermelho", "Verde", "Roxo", "Amarelo", "Rosa", "Laranja", "Preto", "Branco", "Cinza"];

// Imprimindo as listas originais
console.log("Nomes:", nomes);
console.log("Idades:", idades);
console.log("Cores Favoritas:", coresFavoritas);

// Fazendo algumas modificações
idades[2] = 23; // Alterando a idade da terceira pessoa
coresFavoritas[5] = "Azul Claro"; // Alterando a cor favorita da sexta pessoa

// Imprimindo as listas após as modificações
console.log("\nNomes:", nomes);
console.log("Idades:", idades);
console.log("Cores Favoritas:", coresFavoritas);
