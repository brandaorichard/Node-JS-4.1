function calcularDiv(num1, num2) {
  if (num2 == 0)
    throw new Error('Erro div')
  const result = num1 / num2
  return result
}

try {
  const result = calcularDiv(2, 1)
  console.log("resultado: %s", result);
} catch (error) {
  console.log("erro: ", error.message);
}