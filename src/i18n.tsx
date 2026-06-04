import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    resources: {
      en: {
        translation: {
          sidr: "Sidr",
          silq: "Beet",
          olive: "Olive",
          wheat: "Wheat",
          datePalm: "Date Palm",
          fig: "Fig",
          pomegranate: "Pomegranate",
          grape: "Grape",
          banana: "Banana",
          mint: "Mint",
          basil: "Basil",
          ginger: "Ginger",
          playGames: "Play Games",
          searchPlant: "Search by plant number...",
          enterPlantNumber: "Enter Plant Number",
          clear: "Clear",
          search: "Search",
          plantNotFound: "Plant not found",
          habitat: "Habitat & Distribution",
          description: "Description",
          uses: "Uses",
          quran: "Qur'an & Hadith",
          plant_sidr: "Sidr",
          plant_silq: "Beet",
          plant_olive: "Olive",
          plant_wheat: "Wheat",
          plant_silq_habitat:
            "Its native range includes Algeria, the Gulf countries, Kuwait, Egypt, Iraq, Lebanon, Syria, Libya, Morocco, the Azores, the Balearic Islands, Albania, Belgium, Bulgaria, the Canary Islands, Corsica, Cyprus, the Eastern Aegean Islands, France, Germany, Great Britain, Greece, India, Iran, Ireland, and Italy. It is widely cultivated.",

          plant_silq_description: `An erect annual, occasionally a perennial herb, about 0.3–0.5 m tall.
          Stem: furrowed and glabrous.
          Leaves: dark red to green with prominent midrib, slightly fleshy.
          Inflorescences: cymes.
          Flowers: usually greenish.
          Fruits: 5–11 achenes per cluster.
          Roots: red, white or yellow, fibrous or swollen.`,
          plant_silq_uses: "Culinary.",
          plant_silq_quran: `Sahl ibn Saad narrates (via Abu Hazim): “We used to celebrate on Fridays. We knew an elderly woman who would take the roots of chard (silq), put them in her pot, and add a few grains of barley. When we had performed the Friday prayer, we would visit her, and she would offer it to us. We celebrated Fridays for that. We would not have lunch or our midday rest except after the Friday prayers. By Allah, there was neither fat nor oil in it.”
          (Ṣaḥīḥ al-Bukhārī)`,
          games: {
            title: "Games",
            memory: "Memory Game",
            sorting: "Sorting Game",
            quiz: "Quiz Game",
            play: "Play",
          },
          memory: {
            moves: "Moves",
            time: "Time",
            best: "Best",
            win: "🎉 You Win!",
            playAgain: "Play Again",
          },
          sorting: {
            seed: "Seed",
            flower: "Flower",
            fruit: "Fruit",

            winTitle: "🎉 You Win!",
            loseTitle: "💔 Game Over",

            score: "Score",
            finalScore: "Final Score",

            playAgain: "Play Again",
            tryAgain: "Try Again",
            back: "Back to Games",
          },
          plantCards: {
            rose: "Rose",
            apple: "Apple",
            seed: "Seed",
          },
        },
      },

      ar: {
        translation: {
          sidr: "السدر",
          silq: "السلق",
          olive: "الزيتون",
          wheat: "القمح",
          datePalm: "النخيل",
          fig: "التين",
          pomegranate: "الرمان",
          grape: "العنب",
          banana: "الموز",
          mint: "النعناع",
          basil: "الريحان",
          ginger: "الزنجبيل",
          playGames: "العب",
          searchPlant: "ابحث برقم النبات...",
          enterPlantNumber: "أدخل رقم النبات",
          clear: "مسح",
          search: "بحث",
          plantNotFound: "النبتة غير موجودة",
          habitat: "الموطن والتوزيع",
          description: "الوصف",
          uses: "الاستخدامات",
          quran: "القرآن والحديث",

          plant_sidr: "السدر",
          plant_silq: "السلق",
          plant_olive: "الزيتون",
          plant_wheat: "القمح",

          plant_silq_habitat: "موطنها الأصلي ...",

          plant_silq_description: "عشبة حولية ...",

          plant_silq_uses: "الطهي",

          plant_silq_quran: "...",

          games: {
            title: "الألعاب",
            memory: "لعبة الذاكرة",
            sorting: "لعبة الترتيب",
            quiz: "لعبة الأسئلة",
            play: "العب",
          },

          memory: {
            moves: "الحركات",
            time: "الوقت",
            best: "أفضل نتيجة",
            win: "🎉 فزت!",
            playAgain: "العب مرة أخرى",
          },
          sorting: {
            seed: "بذرة",
            flower: "زهرة",
            fruit: "فاكهة",

            winTitle: "🎉 لقد فزت!",
            loseTitle: "💔 انتهت اللعبة",

            score: "النتيجة",
            finalScore: "النتيجة النهائية",

            playAgain: "إعادة اللعب",
            tryAgain: "إعادة المحاولة",
            back: "الرجوع للألعاب",
          },
          plantCards: {
            rose: "وردة",
            apple: "تفاحة",
            seed: "بذرة",
          },
        },
      },
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
