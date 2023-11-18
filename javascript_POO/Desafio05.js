/**
 * Crie um código com um objeto chamado "Banco". Ele deve´ra ter propriedades
 * que inculem conta, saldo, tipo de conta e agência e os seus métodos devem ser:
 * buscar, saldo, depósitos, saque e número da conta.
 * 
 * Observações:
 * -buscar saldo deve retornar o valor atual do saldo;
 * -para o depósito, você deverá passar um valor como parâmetro e adicioná-lo
 * no final do objeto;
 * -para o saque, vocêrá passar um valor como parâmetro e subtra´-lo no saldo final do objeto;
 * -o número da conta deve retornar o número da conta;
 */

// Definindo o objeto Banco
const Banco = {
    conta: 123456,
    saldo: 1000,
    tipoConta: 'Corrente',
    agencia: '001',
  
    // Método para buscar o saldo atual
    consultarSaldo: function () {
      return this.saldo;
    },
  
    // Método para realizar depósitos
    realizarDeposito: function (valor) {
      this.saldo += valor;
      return `Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`;
    },
  
    // Método para realizar saques
    realizarSaque: function (valor) {
      if (valor > this.saldo) {
        return 'Saldo insuficiente para realizar o saque.';
      }
  
      this.saldo -= valor;
      return `Saque de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`;
    },
  
    // Método para obter o número da conta
    obterNumeroConta: function () {
      return this.conta;
    }
  };
  
  // Exemplos de utilização
  console.log('Saldo atual:', Banco.consultarSaldo());
  console.log(Banco.realizarDeposito(500));
  console.log(Banco.realizarSaque(200));
  console.log('Número da conta:', Banco.obterNumeroConta());
  