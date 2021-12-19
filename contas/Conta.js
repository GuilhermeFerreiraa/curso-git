// CLASSE ABSTRATA NÃO PODE SER INSTANCIADA, APENAS HERDADA
export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if(this.constructor == Conta){
      throw new Error(`
      Você não deveria instanciar um objeto do tipo Conta,
      pois é uma classe ABSTRATA`)
    }
    this._saldo = saldoInicial
    this._cliente = cliente
    this._agencia = agencia
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor
    }
  }

  get cliente() {
    return this._cliente
  }

  get saldo() {
    return this._saldo
  }
  // método abstrato é um método que é somente para ser sobrescrito, mas que obriga as classes filhas a utilizarem o método
  sacar(valor) {
    throw new Error(`O método sacar da conta é abstrato`)
  }
  //  sobreescrevendo o comportamento de sacar da classe mae
  _sacar(valor, taxa) {
    const valorSacado = taxa * valor
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado
      return valorSacado
    }
    return 0
  }

  depositar(valor) {
    this._saldo += valor
  }

  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor)
    conta.depositar(valorSacado)
  }
}
