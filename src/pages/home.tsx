import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo2.png";
import { useTranslation } from "react-i18next";
import "../i18n.tsx";
export default function Home() {
  const { i18n } = useTranslation();
  const handleLangClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setEffect({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });

    setTimeout(() => setEffect(null), 900);
  };

  const navigate = useNavigate();
  const [, setEffect] = useState<{
    x: number;
    y: number;
  } | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-center justify-center text-center py-20 px-4 ">
        <img
          className="sm:w-lg md:w-xl lg:w-2xl z-10 mb-5 mt-5"
          src={logo}
          alt="logo"
        ></img>
        <div className="flex flex-col items-center gap-2 ">
          <div className="flex flex-col items-center gap-4 z-10 mt-30">
            <button
              onClick={(e) => {
                handleLangClick(e);

                i18n.changeLanguage("ar");

                setTimeout(() => {
                  navigate("/plants");
                }, 600);
              }}
              className="
    w-40 sm:w-60 md:w-72 lg:w-80
    h-16 sm:h-20 md:h-24 lg:h-32
    text-xl sm:text-2xl md:text-3xl lg:text-4xl
    font-bold
    rounded-xl
    text-white
    bg-black/60
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

                i18n.changeLanguage("en");

                setTimeout(() => {
                  navigate("/plants");
                }, 600);
              }}
              className="
    w-40 sm:w-60 md:w-72 lg:w-80
    h-16 sm:h-20 md:h-24 lg:h-32
    text-xl sm:text-2xl md:text-3xl lg:text-4xl
    font-bold
    rounded-xl
    text-white
    bg-black/60
    hover:scale-105
    transition
    cursor-pointer
  "
            >
              ENGLISH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
