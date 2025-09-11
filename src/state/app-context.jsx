import React, { createContext, useState, useContext } from "react";

// 1) Create context
const AppContext = createContext();

// 2) Create provider
export function AppProvider({ children }) {
  const [states, setStates] = useState([]);
  const [backgroundClr, setBackgroundClr] = useState("black");
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };

  const increaseCountByFive = () => {
    setCount((prev) => prev + 5);
  };

  const decreaseCountByFive = () => {
    setCount((prev) => prev - 5);
  };

  const toggleBackground = () => {
    setBackgroundClr((prev) => (prev === "black" ? "orange" : "black"));
  };

  const saveStates = (states) => {
    setStates(states);
  };

  return (
    <AppContext.Provider
      value={{
        count,
        increaseCount,
        decreaseCount,
        increaseCountByFive,
        decreaseCountByFive,
        toggleBackground,
        backgroundClr,
        saveStates,
        states,
      }}>
      {children}
    </AppContext.Provider>
  );
}

// 3) Create hook to use context easily
export function useAppContext() {
  return useContext(AppContext);
}
