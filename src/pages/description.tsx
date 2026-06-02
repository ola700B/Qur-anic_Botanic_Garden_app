import silq from "../assets/img/plant2.png";
import { useParams } from "react-router-dom";
import { plants } from "./plantsData";

function Description() {
   const { id } = useParams();

  const plant = plants.find((p) => p.id === Number(id));

  if (!plant) {
    return <div className="p-4">Plant not found</div>;
  }
  return (
   
        <div className="min-h-screen bg-emerald-500 p-4">
      <h1 className="font-bold text-xl text-green-950 mb-4">
        Description
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
          Description
        </h3>

       <p style={{ whiteSpace: "pre-wrap" }}>
  {plant.description
    .split("\n")
    .map((line, i) => {
      if (line.startsWith("Leaves:")) {
        return (
          <p key={i}>
            <b>Leaves:</b>
            {line.replace("Leaves:", "")}
          </p>
        );
      }

      if (line.startsWith("Flowers:")) {
        return (
          <p key={i}>
            <b>Flowers:</b>
            {line.replace("Flowers:", "")}
          </p>
        );
      }

      if (line.startsWith("Inflorescences:")) {
        return (
          <p key={i}>
            <b>Inflorescences:</b>
            {line.replace("Inflorescences:", "")}
          </p>
        );
      }

      return <p key={i}>{line}</p>;
    })}
</p>
      </div>
    </div>
    
  )
}

export default Description
