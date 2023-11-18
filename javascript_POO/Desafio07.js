/**
 * Com base no que estudamos, escolha dois objetos materiais e dois abstratos.
 * Em seguida, faça uma lista com, pelo menos, três atributos e três métodos 
 * para cada tipo de objeto. Para finalizar, demonstre esses objetos em Javascript
 * e exemplifique as suas caractísticas e ações.
 */

// Objeto Computador
const computador = {
    modelo: 'Dell Inspiron',
    capacidadeArmazenamento: '512GB SSD',
    velocidadeProcessador: '2.5 GHz',
  
    ligarDesligar: function () {
      console.log('Ligando/Desligando o computador.');
    },
  
    iniciarSistemaOperacional: function () {
      console.log('Iniciando o sistema operacional.');
    },
  
    executarAplicacao: function (aplicacao) {
      console.log(`Executando a aplicação: ${aplicacao}`);
    }
  };
  
  // Exemplo de utilização do objeto Computador
  computador.ligarDesligar();
  computador.iniciarSistemaOperacional();
  computador.executarAplicacao('Navegador');
  
  // Objeto Bicicleta
const bicicleta = {
    modelo: 'Caloi Elite',
    tipoFreio: 'Disco',
    numeroMarchas: 21,
  
    pedalar: function () {
      console.log('Pedalando a bicicleta.');
    },
  
    frear: function () {
      console.log('Freando a bicicleta.');
    },
  
    trocarMarcha: function (novaMarcha) {
      console.log(`Trocar para a marcha ${novaMarcha}.`);
    }
  };
  
  // Exemplo de utilização do objeto Bicicleta
  bicicleta.pedalar();
  bicicleta.trocarMarcha(3);
  bicicleta.frear();
  

  // Objeto Amizade
const amizade = {
    confianca: 'Alta',
    companheirismo: 'Excelente',
    lealdade: 'Inabalável',
  
    fortalecerVinculo: function () {
      console.log('Fortalecendo o vínculo de amizade.');
    },
  
    oferecerApoio: function () {
      console.log('Oferecendo apoio em momentos difíceis.');
    },
  
    compartilharExperiencias: function () {
      console.log('Compartilhando experiências e alegrias.');
    }
  };
  
  // Exemplo de utilização do objeto Amizade
  amizade.fortalecerVinculo();
  amizade.oferecerApoio();
  amizade.compartilharExperiencias();
  
  // Objeto Felicidade
const felicidade = {
    satisfacao: 'Elevada',
    bemEstar: 'Harmonioso',
    realizacao: 'Alcançada',
  
    cultivarPositividade: function () {
      console.log('Cultivando pensamentos positivos.');
    },
  
    buscarRealizacaoPessoal: function () {
      console.log('Buscando a realização pessoal e profissional.');
    },
  
    compartilharAlegria: function () {
      console.log('Compartilhando alegria e positividade com os outros.');
    }
  };
  
  // Exemplo de utilização do objeto Felicidade
  felicidade.cultivarPositividade();
  felicidade.buscarRealizacaoPessoal();
  felicidade.compart
  