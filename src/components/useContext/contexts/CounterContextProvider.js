import React, { createContext, useEffect, useState } from "react";

export const CounterContext = createContext();

export function CounterContextProvider({ children }) {
  const [counter, setCounter] = useState(0);
  const [doubleCounter, setDoubleCounter] = useState(0);

  useEffect(() => {
    setDoubleCounter(counter * 2);
  }, [counter]);

  const increaseCounter = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <CounterContext.Provider
      value={{ counter, increaseCounter, doubleCounter }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;
