import { useContext, useEffect } from "react";
import { DigimonContext } from "../DigimonContext";
import { TeamCard } from "./TeamCard";

export const TeamSidebar = () => {
  const { state, dispatch } = useContext(DigimonContext);

  // useEffect(() => {
  //   console.log(state.team.length)
  // }, [state])

  return (
    <div className="basis-sm">
      {state.loading && <p>Loading team...</p>}

      {state.team.length < 1 && <p>Add to team...</p>}

      <ul className="flex flex-col gap-5">
        {state.team.map(d =>
          <li key={d.id}><TeamCard data={d} /></li>
        )}
      </ul>
    </div>
  );
};
