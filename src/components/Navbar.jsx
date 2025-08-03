import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 text-center text-xl font-bold">
      <Link to="/">Pokémon Explorer</Link>
    </nav>
  )
}