console.log('node-fetch e biblioteca axios');

// importacao do nodeFetch
const fetch = require('node-fetch')

// importacao do axios
const axios = require('axios').default

const endpoint_api = 'https://random-data-api.com/api/v2/banks'

// Exemplo nodeFetch
const fetchBank = async () => {
  try {
    const response = await fetch(endpoint_api)
    const data = await response.json()
    return data.bank_name
  } catch (error) {
    console.error(err.message);
    return null;
  }
}

// Exemplo Axios com try catch para tratacao de erros
const fetchBankAxios = async () => {
  try {
    const response = await axios.get(endpoint_api)
    return response.data.bank_name;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// const main = async () => {
//   const bank = await fetchBankAxios()
//   console.log(bank);
// }

const fetchUserBank = async (name) => {
  const bankName = await fetchBankAxios()
  return `${name}: ${bankName || 'Banco nao encontrado'}`
}

const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6']

const fetchUserBanksParallel = async () => {
  const promises = users.map(user => {
    return fetchUserBank(user)
  })
  return Promise.all(promises)
}

// Usando o Promise.all() ao inves de lidar com estrategia sequencial
const main = async () => {
  const userBanks = await fetchUserBanksParallel()
  console.log(userBanks);
}

main()

// NEVER FORGET: TODA FUNCAO ASYNC RETORNA UMA PROMISE!!!