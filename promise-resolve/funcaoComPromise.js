function calcularDiv(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error("Error div"))
    const result = num1 / num2
    resolve(result)
  })
  return promise
  // nesse caso a funcao retorna uma promise
}
// para tratar a promise chamamos a funcao e fazemos a tratativa com o then e catch.

calcularDiv(2, 1)
  .then((result) => console.log(result))
  .catch(err => console.log("erro: ", err.message))