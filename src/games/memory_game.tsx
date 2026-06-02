import { useEffect, useState } from "react";

import plant1 from "../assets/img/1.png";
import plant2 from "../assets/img/2.png";
import plant3 from "../assets/img/3.png";
import plant4 from "../assets/img/4.png";

type CardType = {
  id: number;
  image: string;
  matched: boolean;
};

const plantImages = [plant1, plant2, plant3, plant4];

const createDeck = (): CardType[] =>
  [...plantImages, ...plantImages]
    .map((img, i) => ({
      id: i + Math.random(),
      image: img,
      matched: false,
    }))
    .sort(() => Math.random() - 0.5);

export default function MemoryGame() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [win, setWin] = useState(false);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [bestScore, setBestScore] = useState<number | null>(null);
  const [winSoundPlayed, setWinSoundPlayed] = useState(false);
  const [previewMode, setPreviewMode] = useState(true);
  const theme = localStorage.getItem("theme");

  useEffect(() => {
    setCards(createDeck());

    const timer = setTimeout(() => {
      setPreviewMode(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // TIMER
  useEffect(() => {
    if (win) return;

    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [win]);

  // WIN CHECK
  useEffect(() => {
    if (cards.length > 0 && cards.every((c) => c.matched)) {
      setTimeout(() => {
        setWin(true);

        setBestScore((prev) => {
          if (prev === null || time < prev) return time;
          return prev;
        });

        if (!winSoundPlayed) {
          const audio = new Audio("/sounds/win.mp3");
          audio.volume = 0.4;
          audio.play().catch(() => {});
          setWinSoundPlayed(true);
        }
      }, 500);
    }
  }, [cards, time]);

  const restart = () => {
    setCards(createDeck());
    setFlipped([]);
    setDisabled(false);
    setWin(false);

    setMoves(0);
    setTime(0);

    setPreviewMode(true);

    setTimeout(() => {
      setPreviewMode(false);
    }, 3000);
  };

  const playMatchSound = () => {
    const audio = new Audio("/sounds/match.mp3");
    audio.volume = 0.1;
    audio.play().catch(() => {});
  };

  const playWrongSound = () => {
    const audio = new Audio(
      "https://cdn.pixabay.com/download/audio/2022/03/24/audio_2b3f3a7f9d.mp3"
    );
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  const handleFlip = (index: number) => {
    if (previewMode) return;
    if (disabled || win) return;
    if (flipped.includes(index)) return;
    if (cards[index].matched) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setDisabled(true);

      setMoves((m) => m + 1);

      const [a, b] = newFlipped;

      if (cards[a].image === cards[b].image) {
        setCards((prev) =>
          prev.map((c, i) =>
            i === a || i === b ? { ...c, matched: true } : c
          )
        );

        setTimeout(() => {
          playMatchSound();
          setFlipped([]);
          setDisabled(false);
        }, 300);
      } else {
        playWrongSound();

        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 800);
      }
    }
  };

  return (
     <div
    className={`min-h-screen transition-all duration-500 flex flex-col items-center justify-center p-4 ${
      theme === "dark"
        ? "bg-gray-900 text-white"
        : theme === "light"
        ? "bg-gray-100 text-black"
        : "bg-green-700 text-gray-800"
    }`}
  >
      
      {/* STATS */}
        <div className="w-full max-w-6xl flex flex-wrap justify-center gap-4 mb-8">
        <div className="bg-white/80 px-4 py-2 rounded-xl font-semibold">
          🎯 Moves: {moves}
        </div>

        <div className="bg-white/80 px-4 py-2 rounded-xl font-semibold">
          ⏱️ Time: {time}s
        </div>

        <div className="bg-white/80 px-4 py-2 rounded-xl font-semibold">
          🏆 Best: {bestScore !== null ? `${bestScore}s` : "—"}
        </div>
      </div>

      {/* GAME */}
        <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 place-items-center">
        {cards.map((card, index) => {
          // ⭐ FIX: previewMode يفتح كل الكروت أول 3 ثواني
          const isFlipped =
            previewMode || flipped.includes(index) || card.matched;

          return (
            <div
              key={card.id}
              onClick={() => handleFlip(index)}
              className="w-full aspect-3/4 max-w-35 max-w-35sm:max-w-40 md:max-w-45 cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative w-full h-full transition-transform duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped
                    ? "rotateY(180deg)"
                    : "rotateY(0deg)",
                }}
              >
                {/* BACK */}
                <div
                  className="absolute w-full h-full bg-green-600 rounded-xl flex items-center justify-center text-white text-3xl"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  🌿
                </div>

                {/* FRONT */}
                <div
                  className="absolute w-full h-full bg-white rounded-xl flex items-center justify-center"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={card.image}
                    alt=""
                    className="w-20 h-28 object-contain"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* WIN */}
      {win && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl text-center">
            <h1 className="text-2xl font-bold text-green-700 mb-2">
              🎉 You Win!
            </h1>

            <p>Time: {time}s</p>
            <p>Moves: {moves}</p>

            <button
              onClick={restart}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg cursor-pointer"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}