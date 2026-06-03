import { useParams } from "react-router-dom";
import { plants } from "./plantsData";
import { useTranslation } from "react-i18next";

function Description() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  const plant = plants.find((p) => p.id === Number(id));

  if (!plant) {
    return (
      <div className="p-4">
        {t("plantNotFound")}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emerald-500 p-4 md:p-8 pb-28">
      <div className="w-full mt-10">

        {/* TITLE */}
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-green-950 mb-6">
          {t("description")}
        </h1>

        {/* HEADER CARD */}
        <div
          className={`
            w-full
            bg-green-950
            text-white
            rounded-2xl
            p-6 md:p-8
            flex flex-row
            items-center
            gap-6
             ${i18n.language === "ar" ? "direction-rtl" : ""}
          `}
        >
          <img
            src={plant.image}
            alt={plant.nameKey}
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-xl shadow-lg shrink-0"
          />

          <div>
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
              {t(plant.nameKey)}
            </h2>

            <p className="text-sm md:text-lg lg:text-xl mt-2">
              <i>{plant.scientificName.italic}</i> {plant.scientificName.author}
            </p>
          </div>
        </div>

        {/* DESCRIPTION CARD */}
        <div className="w-full bg-green-950 text-white rounded-2xl p-6 md:p-8 mt-6">

          <h3 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">
            {t("description")}
          </h3>

          <div className="w-full h-px bg-white/30 my-6" />

          <div className="space-y-3 text-sm md:text-base lg:text-lg leading-7 md:leading-8">
            {t(plant.descriptionKey)
              .split("\n")
              .map((line, i) => {
                const [label, ...rest] = line.split(":");

                if (rest.length) {
                  return (
                    <p key={i}>
                      <span className="font-bold">{label}:</span>{" "}
                      {rest.join(":")}
                    </p>
                  );
                }

                return <p key={i}>{line}</p>;
              })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Description;