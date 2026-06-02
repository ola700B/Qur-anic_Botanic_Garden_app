import { Outlet, useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

function Layout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-1">
        <Outlet />
      </div>

      <div className="sticky bottom-0  left-0 w-full bg-black/50 backdrop-blur-md flex justify-between items-center py-2 text-white z-50">
        <button   aria-label="Go back"
          onClick={() => navigate(-1)} className="cursor-pointer ml-4">
          <ArrowLeft size={22} />
        </button>

        <button   aria-label="Home"
          onClick={() => navigate("/")} className="cursor-pointer mr-4">
          <Home size={22} />
        </button>
      </div>

    </div>
  );
}

export default Layout;