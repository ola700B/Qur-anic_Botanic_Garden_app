import sidr from "../assets/img/sidr.jpg";
import apple from "../assets/img/applePopup.jpg";
import olive from "../assets/img/6.jpg";
import wheat from "../assets/img/wheatPopup.jpg";
import sidrPopup from "../assets/img/sidrPopup.jpg"
import applePopup from "../assets/img/applePopup.jpg"
import olivePopup from "../assets/img/olivePopup.jpg"
import wheatPopup from "../assets/img/wheat.jpg"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

type Plant = {
  id: number;
  name: string;
  image: string;
  popupImage: string;
};

function Plants({ lang }: { lang: "ar" | "en" }) {
   const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [selectedSection, setSelectedSection] = useState("");
  const navigate = useNavigate();
  const theme = localStorage.getItem("theme");
  const plants: Plant[] = [
  {
    id: 1,
    name: lang === "ar" ? "السدر" : "Sidr",
    image: sidr,
    popupImage: sidrPopup,
  },
  {
    id: 2,
    name: lang === "ar" ? "التفاح" : "Apple",
    image: apple,
    popupImage: applePopup,
  },
  {
    id: 3,
    name: lang === "ar" ? "الزيتون" : "Olive",
    image: olive,
    popupImage: olivePopup,
  },
  {
    id: 4,
    name: lang === "ar" ? "القمح" : "Wheat",
    image: wheat,
    popupImage: wheatPopup,
  },
];
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
      <div
        className="
    absolute
    -top-40
    -left-40
    rounded-full
    blur-3xl
    bg-white
animate-pulse
  "
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full max-w-5xl mx-auto">
        {plants.map((plant) => (
          <div
            key={plant.id}
           onClick={() => {
      if (plant.id === 1) {
        setSelectedPlant(plant);
      }
    }}
            className="bg-green-700 m-4 mt-5 rounded-xl p-3 shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
          >
            {/* IMAGE BOX */}
            <div className="relative rounded-xl p-2 h-32 flex items-center justify-center">
              <img
                src={plant.image}
                alt={plant.name}
                className="absolute h-full w-full rounded-lg object-cover"
              />
            </div>

            {/* NAME */}
            <p className="text-white text-left mt-2 font-semibold ">
              {plant.name}
            </p>
          </div>
        ))}
      </div>
      <Link to={"/memory_game"}>
  <button className="mt-8 mb-5 block mx-auto px-6 py-3 bg-green-600 text-white rounded-xl">
    {lang === "ar" ? "ابدأ اللعب" : "Play Game"}
  </button>
</Link>
      {selectedPlant && (
        <div className="fixed inset-0 flex items-center justify-center z-50 animate-fadeIn">
          <div className=" bg-black/30 backdrop-blur-sm  w-[90%] max-w-3xl rounded-3xl p-6 relative animate-modal">
            <button
              onClick={() => setSelectedPlant(null)}
              className="absolute top-1 right-4 text-lg cursor-pointer"
            >
              ✕
            </button>

            <img
              src={selectedPlant.popupImage}
              alt={selectedPlant.name}
              className="w-full h-72 rounded-2xl"
              style={{ imageRendering: "auto" }}

            />

            <h2 className="text-3xl font-bold text-center mt-4">
              {selectedPlant.name}
            </h2>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <button
                onClick={() => setSelectedSection("Habitat & Distribution")}
                className="bg-linear-to-r
    from-green-700
    via-green-800
    to-green-950
    text-white
    p-4
    rounded-lg
    font-semibold
    shadow-lg
    hover:-translate-y-1
    hover:shadow-2xl
    transition-all
    duration-300 cursor-pointer"
              >
                Habitat & Distribution
              </button>

              <button
                onClick={() => setSelectedSection("Description")}
                className="bg-linear-to-r
    from-green-700
    via-green-800
    to-green-950
    text-white
    p-4
    rounded-lg
    font-semibold
    shadow-lg
    hover:-translate-y-1
    hover:shadow-2xl
    transition-all
    duration-300 cursor-pointer"
              >
                Description
              </button>

              <button
                onClick={() => setSelectedSection("Uses")}
                className="bg-linear-to-r
    from-green-700
    via-green-800
    to-green-950
    text-white
    p-4
    rounded-lg
    font-semibold
    shadow-lg
    hover:-translate-y-1
    hover:shadow-2xl
    transition-all
    duration-300 cursor-pointer"
              >
                Uses
              </button>

              <button
                onClick={() => setSelectedSection("Qur'an & Hadith")}
                className="bg-linear-to-r
    from-green-700
    via-green-800
    to-green-950
    text-white
    p-4
    rounded-lg
    font-semibold
    shadow-lg
    hover:-translate-y-1
    hover:shadow-2xl
    transition-all
    duration-300 cursor-pointer"
              >
                Qur'an & Hadith
              </button>
            </div>
          </div>
        </div>
      )}
      {selectedSection && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-60">
    <div className="bg-black/30 backdrop-blur-sm text-white p-8 rounded-3xl max-w-xl h-auto w-[90%]">

      <button
        onClick={() => setSelectedSection("")}
        className="float-right text-2xl cursor-pointer"
      >
        ✕
      </button>

      {/* TITLE + DIVIDER */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold capitalize">
          {selectedSection}
        </h2>

        <div className="w-full h-0.5 bg-white/70 mx-auto mt-2 rounded-full"></div>
      </div>

      {selectedSection === "Habitat & Distribution" && (
        <p>
          The Sidr tree grows mainly in hot, dry regions and is highly drought-resistant. It is commonly found in deserts, dry valleys, and rocky areas with poor soil.

          It is widely distributed across the Middle East, North and East Africa, and parts of South Asia, where the climate is warm and rainfall is low.
        </p>
      )}

      {selectedSection === "Description" && (
        <p>
          Sidr tree is a sturdy and deep-rooted tree which has withstood the devastating floods of Eram at Ma’arib Yemen with two other trees: the Tamarisk and the Mustard Tree. The Sidr tree belongs to the “Ziziphus” family of plants. The average tree size is normally between 7-8 meters high. Its branches are soft and gray-yellowish. The flowers of the plant are yellow as well as the round Sidr fruits which turn reddish when ripe.
        </p>
      )}

      {selectedSection === "Uses" && (
        <p>
          Sidr is used in traditional medicine, especially for treating skin problems and supporting digestion. Its leaves are also used for cleansing hair and body, while its flowers are important for producing high-quality honey.
        </p>
      )}

      {selectedSection === "Qur'an & Hadith" && (
        <p>
          The Sidr tree is mentioned in multiple places in the Quran, carrying both earthly and heavenly meanings: The Tree of Paradise: Allah describes the beauty of Paradise using thornless Sidr trees: "Among lote-trees with no thorns" (Surah Al-Waqi'ah 56:28). Sidrat al-Muntaha: The Sidr tree marks the ultimate boundary in the heavens, which the Prophet ﷺ passed during the Night Journey (Isra wal-Mi'raj): "Near the Lote Tree of the farthest limit" (Surah An-Najm 53:14). The Prophet Muhammad ﷺ emphasized the use of Sidr leaves in practical, everyday Islamic life: Purification and Ritual Washing: The Prophet ﷺ instructed that the deceased be washed with water and Sidr. He also directed new converts to Islam to bathe themselves with water and Sidr.
        </p>
      )}

    </div>
  </div>
)}
<div className="fixed  bottom-0 left-0 w-full bg-black/50 h-14 backdrop-blur-md  flex justify-around items-center py-3 text-white z-50">
  
  {/* BACK */}
  <button
    onClick={() => navigate(-1)}
    className="flex flex-col items-center ml-4 cursor-pointer gap-1 hover:text-green-300 transition"
  >
    <ArrowLeft size={22} />
   <span className="text-xs">
  {lang === "ar" ? "رجوع" : "Back"}
</span>
  </button>

  {/* HOME */}
  <button
    onClick={() => navigate("/")}
    className="flex flex-col items-center mr-4 cursor-pointer gap-1 hover:text-green-300 transition"
  >
    <Home size={22} />
    <span className="text-xs">
  {lang === "ar" ? "الرئيسية" : "Home"}
</span>
  </button>

</div>
    </div>
  );
}

export default Plants;
