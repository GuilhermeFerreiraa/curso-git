import { Conta } from './Conta.js'

export class ContaEmpresarial extends Conta {
  constructor(valorInicial, cliente, agencia) {
    super(valorInicial, cliente, agencia)
  }

  sacar(valor) {
    const taxa = 1.15
    return super._sacar(valor, taxa)   
  }
}
