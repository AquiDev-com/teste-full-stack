import { createContext, useState } from "react";
import { Children } from "../Interfaces/children";
import { IBeer, IPunkContext } from "../Interfaces/punkContext.interface";
import { apiPunk } from "../services/api.punk";

export const PunkContext = createContext({} as IPunkContext);

export const PunkProvider = ({ children }: Children) => {
  const [drinks, setDrinks] = useState<IBeer[]>();

  const getDrinks = async () => {
    try {
      const response = await apiPunk.get("/beers");
      setDrinks(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  getDrinks();

  return (
    <PunkContext.Provider value={{ drinks }}>{children}</PunkContext.Provider>
  );
};
