import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import memoryImg from "../assets/img/memory.png";
import sortingImg from "../assets/img/sorting.jpg";
import quizImg from "../assets/img/quiz.png";

function GameList() {
  const { t } = useTranslation();

  const games = [
    { id: 1, nameKey: "games.memory", path: "/memory_game", image: memoryImg },
    { id: 2, nameKey: "games.sorting", path: "/sorting_game", image: sortingImg },
    { id: 3, nameKey: "games.quiz", path: "/quiz_game", image: quizImg },
  ];

  return (
    <div className="min-h-screen bg-emerald-500 p-4 md:p-8 pb-28 flex flex-col items-center">

      {/* TITLE */}
      <h1 className="mt-10 mb-8 text-3xl md:text-5xl font-bold text-center text-green-950">
        {t("games.title")}
      </h1>

      {/* GRID */}
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5 md:gap-6
          w-full max-w-6xl
        "
      >
        {games.map((game) => (
          <Link to={game.path} key={game.id} className="w-full">

            <div
              className="
                w-full
                aspect-4/3
                overflow-hidden
                rounded-xl
                bg-green-900/20
                shadow-sm
                backdrop-blur-sm
                transition-all duration-300
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
                    object-cover
                    transition-transform duration-500
                    hover:scale-105
                  "
                />
              </div>

              {/* TITLE */}
              <div className="h-[25%] flex items-center justify-center bg-green-950 px-2">
                <h2 className="text-white text-sm sm:text-lg md:text-xl font-bold text-center">
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