// src/pages/Home.jsx
import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import PokemonCard from '../components/PokemonCard';

export default function Home() {
  const { filteredPokemons, loading } = useContext(PokemonContext);

  if (loading) {
    return <p className="text-center text-slate-500 mt-10">Loading Pokémon...</p>;
  }

  return (
    <div className="container mx-auto p-4">
       {filteredPokemons.length > 0 ? (
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredPokemons.map(pokemon => (
              <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))}
          </div>
       ) : (
        <p className="text-center text-slate-500 mt-10">No Pokémon found.</p>
       )}
    </div>
  );
}