import { Link } from 'react-router-dom'

export default function PokemonCard({ name, url }) {
  const id = url.split("/").filter(Boolean).pop();
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  return (
    <Link to={`/pokemon/${name}`}>
      <div className="bg-white p-4 rounded-xl shadow hover:scale-105 transition cursor-pointer text-center">
        <img src={image} alt={name} className="mx-auto w-20 h-20" />
        <h3 className="mt-2 capitalize font-semibold">{name}</h3>
      </div>
    </Link>
  )
}
