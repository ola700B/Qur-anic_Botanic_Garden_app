import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
type Lang = "en" | "ar";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const navigate = useNavigate();
  const isAr = lang === "ar";
const [, setIsLeaving] = useState(false);
  return (
<div className="min-h-screen
  bg-linear-to-br from-cyan-100 via-green-400 to-green-500 text-gray-800">
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

        <h1 className="text-2xl font-bold text-green-700">
          Qur'anic Botanic Garden
        </h1>

        <div className="flex gap-2">
         <button
  onClick={() => setLang("ar")}
  className={`relative px-2 py-1 transition-all duration-300
  after:content-[''] after:absolute after:left-0 after:-bottom-1
  after:h-0.5 cursor-pointer after:bg-linear-to-r after:from-green-400 after:to-green-600 after:transition-all after:duration-300

  ${
    isAr
      ? "text-green-500 after:w-full"
      : "text-gray-700 after:w-0 hover:after:w-full"
  }
`}
>
  AR
</button>
           <button
  onClick={() => setLang("ar")}
  className={`relative px-2 py-1  transition-all duration-300
  after:content-[''] after:absolute after:left-0 after:-bottom-1
  after:h-0.5 cursor-pointer after:bg-linear-to-r after:from-green-400 after:to-green-600 after:transition-all after:duration-300

  ${
    isAr
      ? "text-green-500 after:w-full"
      : "text-gray-700 after:w-0 hover:after:w-full"
  }
`}
>
  EN
</button>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex flex-col items-center justify-center text-center mt-24 px-4">

        <h2 className="text-4xl font-bold text-green-800 mb-4">
          {isAr
            ? " Qur'anic Botanic Garden "
            : " Qur'anic Botanic Garden "}
        </h2>

      <Link to ={"/plants"}>
        <button  onClick={() => {
    setIsLeaving(true);

    setTimeout(() => {
      navigate("/plants");
    }, 600); // وقت الأنيميشن
  }} className="mt-8 px-6 py-3 h-16 w-38 bg-green-600 text-white text-2xl rounded-xl hover:bg-green-700 hover:shadow-xl
active:scale-95
transition-all
duration-300 cursor-pointer ">
          {isAr ? "ابدأ" : "أبدأ"}
        </button>
      </Link>  
      </div>
    </div>
  );
}