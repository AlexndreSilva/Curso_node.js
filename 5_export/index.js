const minimist = require('minimist')
const args = minimist(process.argv.slice(2))

console.log(args)

const profissao = args['profissao']
const nome = args['nome']



console.log(`nome: ${nome} e trabalha de ${profissao}`)