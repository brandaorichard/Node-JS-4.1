// Exercicio 6 - A: Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

// importacao do fs
const fs = require('fs').promises

// criei a funcao readAll
const readAll = async () => {
  // utilizei o readfile do fs para ler o conteudo do arquivo
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

  // utilizando o json parse converti o conteudo do arquivo JSON para um array, no exemplo do BMI nao seria necessario visto que declaramos o objeto no corpo do script
  const simpsons = JSON.parse(fileContent);

  // utilizei a HOF map para mapear o objeto e imprimir o id e name de cada personagem
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

  // Utilizei forEach para exibir todas as strings na tela
  strings.forEach((string) => console.log(string));
}

async function main() {
  await readAll();
}

main();