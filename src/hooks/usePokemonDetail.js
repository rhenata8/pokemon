// src/hooks/usePokemonDetail.js
import { useState, useEffect } from 'react';

export function usePokemonDetail(name) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!name) return;

    async function fetchDetail() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!res.ok) {
          throw new Error("Pokémon not found");
        }
        const data = await res.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchDetail();
  }, [name]);

  return { pokemon, loading, error };
}