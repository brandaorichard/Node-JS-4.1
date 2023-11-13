// Lendo arquivos METODO SYNC

// const fs = require('fs');

// const nomeDoArquivo = 'meu-arquivo.txt';

// try {
//   const data = fs.readFileSync(nomeDoArquivo, 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(`Erro ao ler o arquivo: ${err.path}`);
//   console.log(err);
// }


// Lendo arquivos METODO ASYNC (readFile)

const fs = require('fs').promises

const main = async () => {
  try {
    const data = await fs.readFile('./meu-arquivo.txt', 'utf-8')
    console.log(data);
  } catch (error) {
    console.error(`Erro ao ler arquivo: ${error.message}`);
  }
}

main()

