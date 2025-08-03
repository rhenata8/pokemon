import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';

export default function Navbar() {
  const { search, setSearch } = useContext(PokemonContext);

  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? '#0ea5e9' : '#475569', 
  });

  return (
   
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10">
      <nav className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold text-slate-800">
            PokémonExplorer
          </Link>
          
        </div>

        <div className="w-full max-w-xs relative">
          <input
            type="text"
            placeholder="Cari Pokémon..."
            className="w-full pl-4 pr-10 py-2 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
              aria-label="Hapus pencarian"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}