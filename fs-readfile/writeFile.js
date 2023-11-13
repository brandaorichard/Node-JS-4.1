// Escrevendo dados em arquivos (metodo: writeFile)

const fs = require('fs').promises;

const main = async () => {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'xablau2');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()