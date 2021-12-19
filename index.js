import { Cliente } from './contas/Cliente.js'
import { Gerente } from './funcionarios/Gerente.js'
import { Diretor  } from './funcionarios/Diretor.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js'

const diretor = new Diretor("Rodrigo", 10000, 23344633563)
diretor.cadastrarSenha("4231")
const gerente = new Gerente("Fabiana", 7000, 12354393222)
gerente.cadastrarSenha("123")

const cliente = new Cliente("Lais", 23434344443, "567")

const gerenteLogado = SistemaAutenticacao.login(gerente, "123");
const diretorLogado = SistemaAutenticacao.login(diretor, "4231");
const clienteLogado = SistemaAutenticacao.login(cliente, "567");


console.log(`\nA senha do funcionário(a) ${diretor.nome}, está ${diretorLogado ? "Correta" : "Incorreta, tente novamente!"}\n`)
console.log(`A senha do funcionário(a) ${gerente.nome}, está ${gerenteLogado ? "Correta" : "Incorreta, tente novamente!"}\n`)
console.log(`A senha do cliente ${cliente.nome}, está ${clienteLogado ? "Correta" : "Incorreta, tente novamente!"}\n`)

