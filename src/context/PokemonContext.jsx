import { createContext, useState, useEffect } from 'react';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchPokemons() {
      try {
        setLoading(true);
        // Mengambil 151 Pokémon dari Generasi 1
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await res.json();
        setPokemons(data.results);
      } catch (error) {
        console.error("Gagal mengambil data Pokémon:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PokemonContext.Provider value={{ filteredPokemons, loading, search, setSearch }}>
      {children}
    </PokemonContext.Provider>
  );
};