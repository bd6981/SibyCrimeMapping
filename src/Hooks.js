import React, { useContext, useState } from "react";

const mainContext = React.createContext();

export function useMainContext() {
  return useContext(mainContext);
}
export function ContextProvider({ children }) {
  const [crimeData, setCrimeData] = useState([]);
  const [selectedCrime, setSelectedCrime] = useState(null);
  const [reRenderMarkers, setReRenderMarkers] = useState(null);
  const [authorized, setAuthorized] = useState(null);

  const value = {
    crimeData,
    setCrimeData,
    selectedCrime,
    setSelectedCrime,
    reRenderMarkers,
    setReRenderMarkers,
    authorized,
    setAuthorized,
  };
  return (<mainContext.Provider value={value}>{children}</mainContext.Provider>)
}
