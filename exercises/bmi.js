const peso = 74
const altura = 1.70

const handleBmi = (weight, height) => {
  const bmi = weight / (height ** 2);
  console.log(`Peso: ${weight} Altura: ${height}`);
  return bmi.toFixed(2)
}

const main = () => {
  const bmiResult = handleBmi(peso, altura)
  console.log(`BMI result: ${bmiResult}`);
}

main()