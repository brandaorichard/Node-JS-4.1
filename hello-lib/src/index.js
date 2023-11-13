// Biblioteca readline
const readline = require('readline-sync')

// Modulo nativo - Infos sobre sistema
const os = require('os')

// Modulo nativo fs - Interage com arquivos
const fs = require('fs')

const xablau = readline.question('xablau?')

// Mostrando info OS
console.log(os.cpus())

// Mostrando total memoria livre
console.log(os.freemem());
