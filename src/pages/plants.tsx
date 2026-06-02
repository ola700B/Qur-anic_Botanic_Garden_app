import sidr from "../assets/img/sidr.jpg";
import silq from "../assets/img/plant2.png";
import olive from "../assets/img/6.jpg";
import wheat from "../assets/img/wheatPopup.jpg";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Plant = {
  id: number;
  code: string;
  name: string;
  image: string;
};

function Plants() {
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [selectedSection, setSelectedSection] = useState("");
  const [searchNumber, setSearchNumber] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
 const handleSearch = () => {
  const found = plants.find((p) => p.id === Number(searchNumber));

  if (found) {
    navigate(`/plant/${found.id}`);
    setIsSearchOpen(false);
    setSearchNumber("");
  }
};
  
  const plants: Plant[] = [
    { id: 1, code: "01", name: "Sidr", image: sidr },
    { id: 2, code: "02", name: "Silq", image: silq },
    { id: 3, code: "03", name: "Olive", image: olive },
    { id: 4, code: "04", name: "Wheat", image: wheat },
  ];

  return (
    <div className="min-h-screen pb-20 sm:pb-24 md:pb-28 relative">
      
      {/* GLOW EFFECT */}
      <div className="absolute  w-full rounded-full blur-3xl bg-white " />

      {/* GRID */}
      <div className=" grid
  grid-cols-2
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  gap-4
  sm:gap-6
  w-full
  max-w-6xl
  mx-auto
  px-4
  pt-10">

        {plants.map((plant) => (
          <div
            key={plant.id}
           onClick={() => plant.id === 2 && navigate(`/plant/${plant.id}`)}
           className="
  group
  rounded-xl
  overflow-hidden
  shadow-md
  hover:shadow-xl
  hover:-translate-y-1
  transition-all
  duration-300
  cursor-pointer
  bg-green-900/20
  backdrop-blur-sm
  max-h-65
">
            {/* IMAGE */}
            <div className="relative h-36 sm:h-40 overflow-hidden">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* NUMBER */}
              <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-green-950/90 text-white font-bold flex items-center justify-center shadow-lg">
                {String(plant.id).padStart(2, "0")}
              </div>
            </div>

            {/* INFO */}
            <div className="bg-linear-to-r from-green-950 via-green-900 to-green-950 p-4">
              <h3 className="text-white text-base sm:text-lg font-bold">{plant.name}</h3>
            </div>
          </div>
        ))}

      </div>
<div className="w-full flex justify-center mt-6 mb-4 px-4">

  <div
    onClick={() => setIsSearchOpen(true)}
    className="
      w-full
      max-w-md
      h-12
      flex
      items-center
      gap-2
      px-4
      rounded-xl
      bg-white
      border
      border-green-800
      shadow-md
      cursor-pointer
      hover:shadow-lg
      transition
    "
  >
    {/* ICON */}
    <Search size={18} className="text-green-700" />

    {/* TEXT */}
    <span className="text-green-900/60  text-sm">
      Search by plant number...
    </span>

  </div>

</div>
      {/* BUTTON */}
      <Link to="/memory_game">
        <button className="
        h-16
        w-36
        block 
        mx-auto
        mt-10
        text-white
        bg-black/60
        backdrop-blur-sm
        rounded-lg
        text-2xl
        font-bold
        hover:scale-105
        transition
        cursor-pointer
      ">
          Play Games
        </button>
      </Link>
      {isSearchOpen && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

    <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl w-72 text-white relative">

      {/* CLOSE */}
      <button
        onClick={() => setIsSearchOpen(false)}
        className="absolute top-2 cursor-pointer  right-3 text-lg"
      >
        ✕
      </button>

      <h2 className="text-center text-lg mb-4 font-bold">
        Enter Plant Number
      </h2>

      {/* INPUT */}
      <input
        value={searchNumber}
        readOnly
        placeholder="00"
        className="w-full text-center text-2xl h-12 rounded-lg bg-white/10 mb-4 outline-none"
      />

      {/* KEYPAD */}
      <div className="grid grid-cols-3 gap-2">
        {[1,2,3,4,5,6,7,8,9,0].map((num) => (
          <button
            key={num}
            onClick={() =>
              setSearchNumber((prev) =>
                (prev + num).slice(0, 2)
              )
            }
            className="bg-white/10 rounded-lg p-3 hover:bg-white/20"
          >
            {num}
          </button>
        ))}
      </div>

      {/* ACTIONS */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setSearchNumber("")}
          className="text-red-400  hover:bg-white/20 rounded-lg p-3 cursor-pointer hover:scale-105
        transition"
        >
          Clear
        </button>

        <button
          onClick={handleSearch}
          className="text-green-400 font-bold  hover:bg-white/20 rounded-lg p-3 cursor-pointer hover:scale-105
        transition "
        >
          Search
        </button>
      </div>

    </div>

  </div>
)}    
    </div>
  );
}

export default Plants;