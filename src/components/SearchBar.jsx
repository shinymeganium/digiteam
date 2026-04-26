import { useContext, useEffect } from "react";
import { DigimonContext } from "../DigimonContext";

export const SearchBar = () => {
  const { state, dispatch } = useContext(DigimonContext);

  const handleType = (e) => {
    dispatch({ type: "FILTER_BY_NAME", payload: e.target.value });
  };

  useEffect(() => {
    const loadDigimon = async () => {
      const response = await fetch(`${state.apiUrl}?pageSize=1400`);
      const data = await response.json();

      dispatch({ type: "SET_ALL", payload: data.content });
    };

    loadDigimon();
  }, []);

  return (
    <form action="">
      <div className="flex gap-5">
        <input
          className="p-1 border"
          type="search"
          onChange={handleType}
          placeholder="Search for a Digimon..." />

        <button className="px-3 border">Search</button>
      </div>
    </form>
  );
};
