import { useParams } from "react-router-dom";

import sidr from "../assets/img/sidr.jpg";
import silq from "../assets/img/plant2.png";
import olive from "../assets/img/6.jpg";
import wheat from "../assets/img/wheatPopup.jpg";
import { useNavigate } from "react-router-dom";

type Plant = {
  id: number;
  code: string;
  name: string;
  image: string;
};

function PlantDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

   const plants: Plant[] = [
    { id: 1, code: "01", name: "Sidr", image: sidr },
    { id: 2, code: "02", name: "Silq", image: silq },
    { id: 3, code: "03", name: "Olive", image: olive },
    { id: 4, code: "04", name: "Wheat", image: wheat },
  ];

  const plant = plants.find((p) => p.id === Number(id));

  if (!plant) {
    return (
      <div className="min-h-screen flex pb-20 sm:pb-24 md:pb-28 items-center justify-center relative">
        Plant not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emerald-500 flex justify-center p-4">
      <div className="w-[90%] sm:w-[80%] md:w-[65%] lg:w-112.5 flex flex-col">

        {/* Plant Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-xl">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-72 md:h-80 lg:h-100 object-contain"
          />

          <div className="bg-linear-to-r from-green-950 via-green-900 to-green-950  text-white p-4">
            <h1 className="text-lg md:text-2xl font-bold text-center">
              {plant.name}
            </h1>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <button onClick={() => navigate(`/habitat/${id}`)} className="bg-linear-to-r from-green-950 via-green-900 to-green-950 cursor-pointer p-4 text-white py-4 rounded-md hover:scale-105 transition">
            Habitat & Distribution
          </button>

          <button onClick={() => navigate(`/description/${id}`)} className="bg-linear-to-r from-green-950 via-green-900 to-green-950 cursor-pointer p-4 text-white py-4 rounded-md hover:scale-105 transition">
            Description
          </button>

          <button  onClick={() => navigate(`/uses/${id}`)} className="bg-linear-to-r from-green-950 via-green-900 to-green-950 cursor-pointer p-4 text-white py-4 rounded-md hover:scale-105 transition">
            Uses
          </button>

          <button onClick={() => navigate(`/quran/${id}`)} className="bg-linear-to-r from-green-950 via-green-900 to-green-950 cursor-pointer p-4 text-white py-4 rounded-md hover:scale-105 transition">
            Qur'an & Hadith
          </button>
        </div>

       

      </div>
    </div>
  );
}

export default PlantDetails;