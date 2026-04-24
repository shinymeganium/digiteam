import { useContext } from "react";
import { DigimonContext } from "../DigimonContext";

export const InfoCard = ({ data }) => {
  const { dispatch } = useContext(DigimonContext);

  const addToTeam = async () => {
    try {
        const response = await fetch(`${data.href}`);
        const digimon = await response.json();

        dispatch({ type: "ADD_TO_TEAM", payload: digimon });
      }
      catch (error) {
        console.error("Error adding to team:", error);
      }
  };

  return (
    <div className="flex flex-col items-center gap-3 p-4 border">
      <div className="w-40">
        <img src={data.image} alt={data.name} />
      </div>

      <div className="flex gap-3">
        <span className="">{data.id}</span>
        <span className="">{data.name}</span>
      </div>

      <button className="px-1 border" onClick={addToTeam}>Add to team</button>

    </div>
  );
};
