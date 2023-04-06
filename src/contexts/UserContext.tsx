import { createContext, useState, ReactNode, useContext } from "react";

interface iProvidersProps {
  children: ReactNode;
}

interface iUserContext {}

export const UserContext = createContext({} as iUserContext);

const Providers = ({ children }: iProvidersProps) => {
  return <UserContext.Provider value={{}}> {children}</UserContext.Provider>;
};

export default Providers;
