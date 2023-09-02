/**
 * Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto.
Caso o número do voto não corresponda a nenhum candidato ou seja branco,
ele deve ser tratado como nulo. Se for inserido um texto ao invés de número,
o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor,
aquele com o maior número de votos e, também, a quantidade de votos de cada candidato,
os brancos e nulos. 
 */

// Definição da enumeração para os candidatos
const Candidatos = {
    X: 'Candidato X',
    Y: 'Candidato Y',
    Z: 'Candidato Z',
    BRANCO: 'Voto em Branco',
    NULO: 'Voto Nulo',
  };
  
  // Inicialização dos votos
  const votos = {
    [Candidatos.X]: 0,
    [Candidatos.Y]: 0,
    [Candidatos.Z]: 0,
    [Candidatos.BRANCO]: 0,
    [Candidatos.NULO]: 0,
  };
  
  // Função para exibir os resultados
  function exibirResultados() {
    console.log("Resultados da Eleição:");
    for (const candidato in votos) {
      console.log(`${candidato}: ${votos[candidato]} votos`);
    }
  }
  
  // Função para ler um voto
  function votar() {
    const voto = prompt("Digite o número do candidato (X = 1, Y = 2, Z = 3, Branco = 0):");
    
    if (voto === null) {
      return; // O usuário cancelou a votação
    }
    
    const votoInt = parseInt(voto);
    
    if (isNaN(votoInt)) {
      console.log("Por favor, insira um número válido para votar.");
    } else {
      switch (votoInt) {
        case 0:
          votos[Candidatos.BRANCO]++;
          break;
        case 1:
          votos[Candidatos.X]++;
          break;
        case 2:
          votos[Candidatos.Y]++;
          break;
        case 3:
          votos[Candidatos.Z]++;
          break;
        default:
          votos[Candidatos.NULO]++;
          console.log("Voto nulo: candidato não encontrado.");
      }
    }
  }
  
  // Loop da votação
  while (true) {
    votar();
    const finalizar = prompt("Deseja finalizar a votação? (s/n)").toLowerCase();
    
    if (finalizar === "s") {
      exibirResultados();
      break;
    }
  }
  