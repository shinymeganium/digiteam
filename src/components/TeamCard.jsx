import { useContext, useState } from "react";
import { DigimonContext } from "../DigimonContext";
import { DigimonCard } from "./DigimonCard";

export const TeamCard = ({ data }) => {
  const { state, dispatch } = useContext(DigimonContext);
  const [isOpen, setIsOpen] = useState(false);

  const showData = async () => { setIsOpen(prev => !prev) };

  const remove = () => {
    dispatch({ type: "REMOVE_FROM_TEAM", payload: data.id });
  };

  return (
    <>
    <div className="flex justify-between gap-3 p-3 border">
      <span className="">{data.name}</span>

      <div className="flex gap-2">
        <button className="px-2 border" onClick={showData}>Show more</button>
      <button className="px-2 border" onClick={remove}>Remove from team</button>
      </div>
    </div>

    <DigimonCard data={data} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};