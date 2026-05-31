import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Plants from "./pages/plants";
import Memory_game from "./games/memory_game";

function App() {
  const handleSelect = (value: string) => {
  localStorage.setItem("theme", value);
  setTheme(value);
};
const [lang, setLang] = useState<"ar" | "en">("en");
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme")
  );

  if (!theme) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4  bg-linear-to-br from-cyan-100 via-blue-400 to-green-500 text-gray-800">
        <h1 className="text-3xl font-bold mb-5">
          Choose Theme
        </h1>

        <button
       className="w-64 py-3 bg-white border-2 border-green-500 rounded-xl shadow-md
    hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold cursor-pointer"
         onClick={() => handleSelect("nature")}
        >
          🌿 Nature
        </button>

        <button
        className="w-64 py-3 bg-white border-2 border-yellow-400 rounded-xl shadow-md
    hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold cursor-pointer"
           onClick={() => handleSelect("light")}
        >
          ☀️ Light
        </button>

        <button
        className="w-64 py-3 bg-white border-2 border-gray-700 rounded-xl shadow-md
    hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold cursor-pointer"
          onClick={() => handleSelect("dark")}
        >
          🌙 Dark
        </button>
      </div>
    );
  }

  return (
    <BrowserRouter>
  <Routes>
    <Route
      path="/"
      element={<Home lang={lang} setLang={setLang} />}
    />
    <Route path="/plants" element={<Plants lang={lang} />} />
    <Route path="/memory_game" element={<Memory_game />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;