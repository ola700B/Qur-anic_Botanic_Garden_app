import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo2.png";
export default function Home() {
 
const handleLangClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();

  setEffect({
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  });

  setTimeout(() => setEffect(null), 900);
};

const navigate = useNavigate();
const [effect, setEffect] = useState<{
  x: number;
  y: number;
} | null>(null);

  return (
    
<div
  className="min-h-screen flex flex-col items-center">
  {/* GLOW EFFECT */}
      <div className="absolute  w-full rounded-full blur-3xl bg-white " />
      
      <div className="flex flex-col items-center justify-center text-center  px-4">
        <img className="w-60 sm:w-60 md:w-72 lg:w-80 mb-10 z-10 mt-10" src={logo} alt="logo" ></img>
     <div className="flex flex-col items-center gap-2 mt-20">


  <div className="flex flex-col gap-4 z-10 w-full max-w-xs sm:max-w-sm mb-6">

    <button
 onClick={(e) => {
  handleLangClick(e); // الحلقة والنجوم

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
        text-xl
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
  handleLangClick(e);

  setTimeout(() => {
    navigate("/plants");
  }, 1000);
}}
 className="
        h-20
        w-44
        text-white
        bg-black/60
        backdrop-blur-sm
        rounded-lg
        
        font-bold
        hover:scale-105
        transition
        cursor-pointer
         text-xl sm:text-2xl md:text-3xl
      ">
      ENGLISH
    </button>

  </div>

</div>
      </div>
     {effect && (
  <div
    className="pointer-events-none absolute"
    style={{
      left: effect.x,
      top: effect.y,
      transform: "translate(-50%, -50%)",
    }}
  >
    {/* الحلقة */}
    <span className="absolute w-20 h-20 border-2 border-green-400 rounded-full animate-ping" />

    {/* نجوم */}
    <span className="absolute -top-6 text-yellow-400 animate-float1">⭐</span>
    <span className="absolute top-4 left-6 text-green-400 animate-float2">✨</span>
    <span className="absolute -left-6 text-yellow-300 animate-float3">⭐</span>
  </div>
)}
    </div>
    
  );
}
