import { Outlet, useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { useTranslation } from "react-i18next";

function Layout() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-1">
        <Outlet />
      </div>

      <div
        className="
          sticky bottom-0
          w-full h-16
          bg-black/60 backdrop-blur-sm
          flex items-center justify-between
          px-6
          text-white z-30
        "
      >

        {/* BACK */}
        <button
          aria-label="Go back"
          onClick={() => navigate(-1)}
          className="cursor-pointer flex items-center gap-2"
        >
          <ArrowLeft
            size={30}
            className={isArabic ? "rotate-180" : ""}
          />
        </button>

        {/* HOME */}
        <button
          aria-label="Home"
          onClick={() => navigate("/")}
          className="cursor-pointer flex items-center gap-2"
        >
          <Home size={30} />
        </button>

      </div>
    </div>
  );
}

export default Layout;