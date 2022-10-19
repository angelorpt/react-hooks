import React, { useContext } from "react";
import { CounterContext } from "./contexts/CounterContextProvider";

function Counter() {
  const { counter, increaseCounter } = useContext(CounterContext);

  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={increaseCounter}>Adicionar</button>
    </>
  );
}

export default Counter;
