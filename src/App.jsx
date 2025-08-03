// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';
import { PokemonProvider } from './context/PokemonContext';

function App() {
  return (
    <PokemonProvider>
      <Router>
        <div className=" bg-slate-100 min-h-screen">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pokemon/:name" element={<Detail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </PokemonProvider>
  );
}

export default App;