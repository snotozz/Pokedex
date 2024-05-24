import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Pokemons</h1>
      <SearchBar onSubmit={handleSubmit} />
      <Pokedex pokemones={pokemones} />
    </>
  )
}

export default App