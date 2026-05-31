import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
type Lang = "en" | "ar";

export default function Home({
  lang,
  setLang,
}: {
  lang: "en" | "ar";
  setLang: (lang: "en" | "ar") => void;
}) {
  const isAr = lang === "ar";
const [theme, setTheme] = useState<string | null>(
  localStorage.getItem("theme")
); 
  const navigate = useNavigate();
const [, setIsLeaving] = useState(false);
const [effect, setEffect] = useState<{
  id: number;
  x: number;
  y: number;
} | null>(null);

const handleLangClick = (lang: "ar" | "en", e: React.MouseEvent<HTMLButtonElement>) => {
  setLang(lang);

  const rect = e.currentTarget.getBoundingClientRect();

  setEffect({
    id: Date.now(),
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  });

  setTimeout(() => setEffect(null), 700);
};
  return (
    
<div
  className={`min-h-screen transition-all duration-500 ${
    theme === "dark"
      ? "bg-gray-900 text-white"
      : theme === "light"
      ? "bg-gray-100 text-black"
      : "bg-linear-to-br from-cyan-100 via-green-400 to-green-500 text-gray-800"
  }`}
>
  <div className="
    absolute
    -top-40
    -left-40
    rounded-full
    blur-3xl
    bg-white
animate-pulse
  " />

      {/* 🌿 Navbar */}
      <nav className="flex items-center justify-between px-6 py-4">
        <button className="cursor-pointer"
  onClick={() => {
    localStorage.removeItem("theme");
    window.location.reload();
  }}
>
  Change Theme
</button>
      </nav>

      {/* Hero */}
      <div className="flex flex-col items-center justify-center text-center mt-24 px-4">
 <h2 className="text-4xl font-bold text-green-800 mb-4">
          {isAr
            ? " حديقة القرآن النباتية "
            : " حديقة القرآن النباتية "}
        </h2>
        <h2 className="text-4xl font-bold text-green-800 mb-4">
          {isAr
            ? " Qur'anic Botanic Garden "
            : " Qur'anic Botanic Garden "}
        </h2>

     <div className="flex flex-col items-center gap-4 mt-8">


  <div className="grid grid-col-1 gap-4">

    <button
 onClick={() => {
    setLang("ar");
    navigate("/plants");
  }}

      className={`w-36 py-2 cursor-pointer bg-white border-2 rounded-lg shadow-md
      hover:scale-105 transition-all duration-300
      ${lang === "ar" ? "border-green-600 text-green-600" : "border-gray-300"}`}
    >
      العربية
    </button>

    <button
         onClick={() => {
    setLang("en");
    navigate("/plants");
  }}

      className={`w-36 py-2 cursor-pointer bg-white border-2 rounded-lg shadow-md
      hover:scale-105 transition-all duration-300
      ${lang === "en" ? "border-green-600 text-green-600" : "border-gray-300"}`}
    >
      ENGLISH
    </button>

  </div>

</div>
      </div>
     {effect && (
  <div
    className="pointer-events-none fixed"
    style={{
      left: effect.x,
      top: effect.y,
      transform: "translate(-50%, -50%)",
    }}
  >
    {/* الحلقة */}
    <span className="absolute w-10 h-10 border-2 border-green-400 rounded-full animate-ping" />

    {/* نجوم */}
    <span className="absolute -top-6 text-yellow-400 animate-float1">⭐</span>
    <span className="absolute top-4 left-6 text-green-400 animate-float2">✨</span>
    <span className="absolute -left-6 text-yellow-300 animate-float3">⭐</span>
  </div>
)}
    </div>
    
  );
}