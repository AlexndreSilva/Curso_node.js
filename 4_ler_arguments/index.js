// nome

console.log(process.argv)
//dps disso foi usado o ./index + nome = alex no terminal

//usando o slice pra pegar o 2 indice 
const argv = process.argv.slice(2)

//vai pegar so o nome aqui
console.log(argv)

// o split vai dividir dps do igual e o 1 pegar so essa parte  pra const
const nome = argv[0].split("=")[1]

console.log(nome)