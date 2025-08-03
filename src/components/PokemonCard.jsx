// src/components/PokemonCard.jsx
import { Link } from 'react-router-dom';

export default function PokemonCard({ name, url }) {
  const id = url.split("/").filter(Boolean).pop();
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <Link to={`/pokemon/${name}`} className="block">
      <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group text-center">
        <div className="bg-slate-100 rounded-lg p-2">
          <img src={image} alt={name} className="mx-auto w-24 h-24" loading="lazy" />
        </div>
        <p className="text-xs text-slate-400 mt-3">#{String(id).padStart(3, '0')}</p>
        <h3 className="mt-1 capitalize font-semibold text-slate-700 group-hover:text-sky-600">{name}</h3>
      </div>
    </Link>
  );
}