// src/context/PokemonContext.jsx
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
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151"); // Ambil Gen 1
        const data = await res.json();
        setPokemons(data.results);
      } catch (error) {
        console.error("Failed to fetch pokemons:", error);
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