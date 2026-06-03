import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo3.png";
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
          className="sm:w-2xl md:w-5xl lg:w-6xl z-10 mb-10"
          src={logo}
          alt="logo"
        ></img>
        <div className="flex flex-col items-center gap-2 ">
          <div className="flex flex-col items-center gap-4 z-10 mt-96">
            <button
              onClick={(e) => {
                handleLangClick(e);

                i18n.changeLanguage("ar");

                setTimeout(() => {
                  navigate("/plants");
                }, 600);
              }}
              className="
    w-80
    h-32
    text-4xl
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
    w-80
    h-32
    text-4xl
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
