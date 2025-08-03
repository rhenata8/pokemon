// src/pages/Detail.jsx
import { useParams, Link } from 'react-router-dom';
import { usePokemonDetail } from '../hooks/usePokemonDetail';

const StatBar = ({ stat }) => {
  const percentage = (stat.base_stat / 255) * 100;
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-700 capitalize">{stat.stat.name.replace('-', ' ')}</span>
        <span className="text-sm font-bold text-slate-700">{stat.base_stat}</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2.5">
        <div className="bg-sky-500 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}

export default function Detail() {
  const { name } = useParams();
  const { pokemon, loading, error } = usePokemonDetail(name);

  if (loading) return <div className="p-4 text-center">Loading Pokémon details...</div>;
  if (error) return <div className="p-4 text-center text-red-500">Error: {error}</div>;
  if (!pokemon) return null;

  return (
    <div className="container mx-auto max-w-2xl p-4 sm:p-6">
      <Link to="/" className="text-sky-600 hover:underline mb-4 inline-block">&larr; Back</Link>
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-slate-100 rounded-full p-4">
            <img 
              src={pokemon.sprites.other['official-artwork'].front_default} 
              alt={pokemon.name} 
              className="w-40 h-40" 
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-slate-500 font-semibold">#{String(pokemon.id).padStart(3, '0')}</p>
            <h1 className="text-4xl capitalize font-bold text-slate-800">{pokemon.name}</h1>
            <div className="flex gap-2 mt-2 justify-center sm:justify-start">
              {pokemon.types.map(t => (
                <span key={t.type.name} className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm capitalize">
                  {t.type.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">Abilities</h2>
            <ul className="space-y-2">
              {pokemon.abilities.map(a => (
                <li key={a.ability.name} className="capitalize bg-slate-50 p-2 rounded-md">{a.ability.name.replace('-', ' ')}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">Stats</h2>
            <div className="space-y-3">
              {pokemon.stats.map(s => <StatBar key={s.stat.name} stat={s} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}