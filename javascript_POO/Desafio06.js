/**
 * Implemente e trate uma coneção com o seu banco de dados, usando Javascript.
 * Caso a conexão com o banco tenha sucesso, ele deve retornar uma frase positiva.
 * Se isso não ocorrer, retorne uma frase informando o erro.
 */

const { MongoClient } = require('mongodb');

// URL de conexão com o banco de dados
const url = 'mongodb://localhost:27017'; // Substitua pelo seu URL de conexão

// Nome do banco de dados
const dbName = 'seuBancoDeDados'; // Substitua pelo nome do seu banco de dados

// Conectando ao banco de dados
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }

  console.log('Conexão bem-sucedida ao banco de dados');

  // Realize as operações no banco de dados aqui, se necessário

  // Feche a conexão após as operações
  client.close();
});
