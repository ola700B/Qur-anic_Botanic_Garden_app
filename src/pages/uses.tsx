import silq from "../assets/img/plant2.png";
import { useParams } from "react-router-dom";
import { plants } from "./plantsData";

function Uses() {
  const { id } = useParams();

  const plant = plants.find((p) => p.id === Number(id));

  if (!plant) {
    return <div className="p-4">Plant not found</div>;
  }

  return (
      <div className="min-h-screen bg-emerald-500 p-4">
      <h1 className="font-bold text-xl text-green-950 mb-4">
        Uses
      </h1>

      <div className="bg-green-950 text-white rounded-lg p-3 flex gap-3">
        <img
          src={silq}
          alt="Silq"
          className="w-16 h-16 rounded-md object-cover"
        />

        <div>
          <h2 className="font-bold">{plant.name}</h2>
         <p>
           <i>{plant.scientificName.italic}</i> {plant.scientificName.author}.
          </p>
        </div>
      </div>

      <div className="bg-green-950 text-white rounded-lg p-4 mt-4">
        <h3 className="font-bold text-lg mb-3">
          Uses
        </h3>

        <p>
           {plant.uses}
        </p>
      </div>
    </div>
  )
}

export default Uses
