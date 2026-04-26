import { useContext, useEffect } from "react";
import { DigimonContext } from "../DigimonContext";
import { InfoCard } from "./InfoCard";

export const DigimonList = () => {
  const { state, dispatch } = useContext(DigimonContext);

  useEffect(() => {
    const getDigimonData = async () => {
      dispatch({ type: "SET_LOADING" });

      try {
        const response = await fetch(`${state.apiUrl}?pageSize=9`);
        const data = await response.json();

        //console.log(data.content)
        dispatch({ type: "SET_FILTERED", payload: data.content });
      }
      catch (error) {
        console.error("Error fetching Digimon:", error);
      }
    };

    getDigimonData();
  }, [dispatch]);

  return (
    <div className="grow">
      {state.loading && <p>Loading...</p>}

      <div className="grid grid-cols-3 gap-1 p-1 border">
        {state.filtered.map((digimon) => (
          <InfoCard key={digimon.id} data={digimon} />
        ))}
      </div>
    </div>
  );
};
