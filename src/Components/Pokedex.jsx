import Card from "./Card"

function Pokedex({ pokemones }){
const renderpokemon = pokemones.map((pokemon) => {
return <Card key={pokemon.id} name={pokemon.name}

/>
})

return(
<div className="container ">
<div className="columns is-multiline">
{renderpokemon}
</div>
</div>

)
}

export default Pokedex