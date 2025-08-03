import { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'

export default function Home() {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPokemons() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      const data = await res.json()
      setPokemons(data.results)
      setLoading(false)
    }
    fetchPokemons()
  }, [])

  const filtered = pokemons.filter(pokemon => pokemon.name.includes(search.toLowerCase()))

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <input
        type="text"
        placeholder="Search Pokémon..."
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? <p>Loading...</p> : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map(pokemon => (
            <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          ))}
        </div>
      )}
    </div>
  )
}
