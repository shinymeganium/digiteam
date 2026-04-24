import { createContext, useReducer } from "react";
import { digimonReducer, initialState } from "./DigimonReducer";

export const DigimonContext = createContext(null);

export const DigimonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(digimonReducer, initialState);

  return (
    <DigimonContext.Provider value={{ state, dispatch }}>
      {children}
    </DigimonContext.Provider>
  );
};