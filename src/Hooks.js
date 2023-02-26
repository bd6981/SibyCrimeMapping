import React, { useContext, useState } from "react";

const mainContext = React.createContext();

export function useMainContext() {
  return useContext(mainContext);
}
export function ContextProvider({ children }) {
  const [eventData, setEventData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [reRenderMarkers, setReRenderMarkers] = useState(null);
 

  const value = {
    eventData,
    setEventData,
    selectedEvent,
    setSelectedEvent,
    reRenderMarkers,
    setReRenderMarkers,

  };
  
  return (<mainContext.Provider value={value}>{children}</mainContext.Provider>)
}
