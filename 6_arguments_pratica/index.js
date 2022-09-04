//modulo externo
const minimist = require('minimist')


//modulo interno
const soma = require('./soma/soma').soma


//parseimt ta trasformando os numero q tão em str pra int
const args = minimist(process.argv.slice(2))
const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a,b)

/** resumo, ta pegando dois numeros e são resgatados e usados na função soma e entregar o resultado */