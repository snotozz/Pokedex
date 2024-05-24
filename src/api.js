import axios from 'axios'

const searchPokemon = async(term) => {
const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
const response=await axios.get(url, {
params:{query: term}})

console.log(response.data)

return response.data

}

export default searchPokemon