import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Memory_game from './games/memory_game';
import Plants from './pages/plants';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="plants" element={<Plants/>} />
        <Route path="memory_game" element={<Memory_game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App