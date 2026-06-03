import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function GameList() {
  const { t } = useTranslation();

  const games = [
    {
      id: 1,
      nameKey: "games.memory",
      path: "/memory_game",
      image: "src/assets/img/memory.png",
    },
    {
      id: 2,
      nameKey: "games.sorting",
      path: "/sorting_game",
      image: "src/assets/img/sorting.jpg",
    },
    {
      id: 3,
      nameKey: "games.quiz",
      path: "/quiz_game",
      image: "src/assets/img/quiz.png",
    },
  ];

  return (
    <div className="min-h-screen bg-emerald-500 p-4 md:p-8 pb-28 flex flex-col items-center">

      {/* TITLE */}
      <h1 className="mt-14 mb-10 text-4xl font-bold text-center text-green-950">
        {t("games.title")}
      </h1>

      {/* GRID */}
      <div
        className="
          grid grid-cols-1
          gap-6
          justify-items-center
          w-fit
          max-w-6xl
          mx-auto
        "
      >
        {games.map((game) => (
          <Link to={game.path} key={game.id} className="w-full">

            <div
              className="
                w-full
                h-96
                sm:h-90
                lg:h-150
                lg:w-4xl
                overflow-hidden
                rounded-xl
                bg-green-900/20
                shadow-md
                backdrop-blur-sm
                transition-all duration-300
                group
                hover:shadow-xl hover:-translate-y-1
                cursor-pointer
                flex flex-col
              "
            >

              {/* IMAGE */}
              <div className="h-[75%] w-full overflow-hidden">
                <img
                  src={game.image}
                  alt={t(game.nameKey)}
                  className="
                    w-full h-full
                    object-fill
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* TITLE */}
              <div className="h-[25%] flex items-center justify-center bg-green-950">
                <h2 className="text-white text-lg sm:text-xl font-bold text-center">
                  {t(game.nameKey)}
                </h2>
              </div>

            </div>

          </Link>
        ))}
      </div>
    </div>
  );
}

export default GameList;