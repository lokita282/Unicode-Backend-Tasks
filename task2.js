// Task 2

const axios = require('axios')

axios.get('https://breakingbadapi.com/api/characters')
.then((response) => {
  console.log(response.data)
})
.catch((e) => console.log(e))

//BONUS

axios.get('https://breakingbadapi.com/api/characters?category=Better+Call+Saul')
.then((res) => {
  console.log(res.data)
})
.catch((e) => console.log(e))