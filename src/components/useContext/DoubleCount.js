import React, { useContext } from "react";
import { CounterContext } from "./contexts/CounterContextProvider";

function DoubleCount() {
  const { doubleCounter } = useContext(CounterContext);

  return <div>DoubleCount: {doubleCounter}</div>;
}

export default DoubleCount;
