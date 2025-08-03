import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Detail() {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    async function fetchDetail() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await res.json()
      setPokemon(data)
    }
    fetchDetail()
  }, [name])

  if (!pokemon) return <div className="p-4">Loading...</div>

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl capitalize font-bold mb-4 text-center">{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mx-auto w-40" />

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Types</h2>
        <ul className="flex gap-2">
          {pokemon.types.map(t => (
            <li key={t.type.name} className="bg-gray-200 px-3 py-1 rounded capitalize">
              {t.type.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Abilities</h2>
        <ul className="list-disc list-inside">
          {pokemon.abilities.map(a => (
            <li key={a.ability.name} className="capitalize">{a.ability.name}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Stats</h2>
        <ul>
          {pokemon.stats.map(s => (
            <li key={s.stat.name} className="capitalize">
              {s.stat.name}: {s.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}