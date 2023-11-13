// Importacao do readlineSync apos a instalacao com o npm por ele ser uma 
const readlineSync = require('readline-sync');

// Funcao para calcular o imc, foi utilizado o toFixed para 2 casas decimais, pois o exercicio solicita a altura em metros; e tambem utilizei weight e height como parametros ao inves de declarar uma const para cada
const handleBmi = (weight, height) => {
  const bmi = weight / (height ** 2);
  console.log(`Peso: ${weight} Altura: ${height}`);
  return bmi.toFixed(2)
}

// Nesse exercicio eh cobrado a impressao da classe do IMC na qual o individuo se enquadra, teria como fazer com if mas deixaria o codigo muito repetitivo e complexo com quantidade de verificacoes, nesse caso optei por mapear as classes em um objeto
const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100,
  },
};

// Na sequencia do mapeamento criei a funcao abaixo para poder verificar cada chave do objeto e onde o IMC se enquadra; primeiramente extrai a chave com o ObjectKeys, iterei no array em que as chaves sao listadas e em seguida utilizei a HOF find para encontrar a classe correta para o IMC
const handleBMIResult = (bmi) => {
  // ['Underweight', 'Normal Weight', 'Overweight'...]
  const statuses = Object.keys(BMI_MAX_AND_MIN);

  // acessei as informações do intervalo da situação iterada
  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]

    // caso esteja dentro do intervalo, significa que encontrei a situação apropriada
    return bmi >= minBMI && bmi <= maxBMI
  })
  return resultFind
}


// Funcao main, foi adicionado o pacote readline-sync para realizar inputs de entrada com perguntas do peso e altura; na sequencia a const bmiResult chamando a funcao handleBmi com os parametros ja com o readline implementado; utilizado o questionFloat para que retorne um numero inteiro, nesse caso eh necessario adicionar numeros decimais para o peso; tambem foi adicionado a funcao handleBMIResult para retornar em qual classe o usuario se enquadra
const main = () => {
  const peso = readlineSync.questionFloat('Type your weight: ');
  const altura = readlineSync.questionFloat('Type your height: ');

  const bmiResult = handleBmi(peso, altura)
  console.log(`BMI result: ${bmiResult}`);

  // Adicionando a classificação do IMC
  const bmiStatus = handleBMIResult(parseFloat(bmiResult));
  console.log(`BMI status: ${bmiStatus}`);
}

// Chamada da funcao main
main()

