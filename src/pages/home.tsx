import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";

export default function Home({
   lang,
  setLang,
}: {
  lang: "en" | "ar";
  setLang: (lang: "en" | "ar") => void;
}) {
  const isAr = lang === "ar";
  const [theme, ] = useState<string | null>(
  localStorage.getItem("theme")
); 
const handleLangClick = (
  lang: "ar" | "en",
  e: React.MouseEvent<HTMLButtonElement>
) => {
  setLang(lang);

  const rect = e.currentTarget.getBoundingClientRect();

  setEffect({
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  });

  setTimeout(() => setEffect(null), 700);
};
const navigate = useNavigate();
const [effect, setEffect] = useState<{
  
  x: number;
  y: number;
} | null>(null);

  return (
    
<div
  className={`min-h-screen transition-all duration-500 ${
    theme === "dark"
      ? "bg-gray-900 text-black"
      : theme === "light"
      ? "bg-gray-100 text-black"
      : "bg-green-700"
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
{/* Logo */}
      </nav>
      {/* Hero */}
      
      <div className="flex flex-col items-center justify-center text-center mt-16 px-4">
 <h2 className="text-3xl font-bold text-green-950 mb-4">
          {isAr
            ? " حديقة القرآن النباتية "
            : " حديقة القرآن النباتية "}
        </h2>
        <h2 className="text-3xl font-bold text-green-950 mb-2">
          {isAr
            ? " Qur'anic Botanic Garden "
            : " Qur'anic Botanic Garden "}
        </h2>
<h2 className="text-lg font- text-green-950 mb-2">
          {isAr
            ? " عضو في مؤسسة قطر "
            : " عضو في مؤسسة قطر  "}
        </h2>
        <h2 className="text-lg font-bold text-green-950 mb-2">
          {isAr
            ? " Memeber of Qatar Foundation "
            : " Memeber of Qatar Foundation "}
        </h2>
     <div className="flex flex-col items-center gap-2 mt-4">


  <div className="grid grid-col-1 gap-2">

    <button
 onClick={(e) => {
  handleLangClick("ar", e); // الحلقة والنجوم

  setTimeout(() => {
    navigate("/plants");
  }, 600);
}}
 className="
        h-20
        w-44
        text-white
        bg-black/60
        backdrop-blur-sm
        rounded-lg
        text-3xl
        font-bold
        hover:scale-105
        transition
        cursor-pointer
      "
     
    >
      العربية
    </button>

    <button
        onClick={(e) => {
  handleLangClick("ar", e); // الحلقة والنجوم

  setTimeout(() => {
    navigate("/plants");
  }, 600);
}}
 className="
        h-20
        w-44
        text-white
        bg-black/60
        backdrop-blur-sm
        rounded-lg
        text-3xl
        font-bold
        hover:scale-105
        transition
        cursor-pointer
      ">
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
)}<button
  onClick={() => {
    localStorage.removeItem("theme");
    window.location.reload();
  }}
  className="
    fixed
    bottom-4
    left-1/2
    -translate-x-1/2
    flex
    items-center
    gap-3
    px-6
    py-3
    bg-green-900
    text-white
    rounded-full
    shadow-lg
    hover:scale-105
    transition-all
    duration-300
    cursor-pointer
    z-50
  ">
  <Eye size={24} />
  <span className="font-semibold">
    Change Theme
  </span>
</button>
    </div>
    
  );
}
