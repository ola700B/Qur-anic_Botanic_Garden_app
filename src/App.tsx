import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Plants from "./pages/plants";
import Memory_game from "./games/memory_game";
import Layout from "./components/layouts";
import PlantDetails from "./pages/PlantDetails";
import Description from "./pages/description";
import Habitat from "./pages/habitat";
import Uses from "./pages/uses";
import Quran from "./pages/quran";

function App() {
 
  return (
    <BrowserRouter>
  <Routes>
    <Route
      path="/"
      element={<Home />}
    />
    <Route element={<Layout />}>
  <Route path="/plants" element={<Plants />} />
  <Route path="/memory_game" element={<Memory_game/>} />
  <Route path="/plant/:id" element={<PlantDetails/>} />
  <Route path="/habitat/:id" element={<Habitat />} />
<Route path="/description/:id" element={<Description />} />
<Route path="/uses/:id" element={<Uses />} />
<Route path="/quran/:id" element={<Quran />} />
</Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;