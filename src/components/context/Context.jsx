import React, { useState } from "react";
import { createContext } from "react";

const AppContextProvider = createContext();
export { AppContextProvider };

const AppProvider = ({ children }) => {
  const [appData, setAppData] = useState([]);
  return (
    <AppContextProvider.Provider value={{ appData, setAppData }}>
      {children}
    </AppContextProvider.Provider>
  );
};

export default AppProvider;
