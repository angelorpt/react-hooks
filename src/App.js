import CounterContextProvider from "./components/useContext/contexts/CounterContextProvider";
import Counter from "./components/useContext/Counter";
import DoubleCount from "./components/useContext/DoubleCount";

function App() {
  return (
    <CounterContextProvider>
      <>
        <Counter />
        <DoubleCount />
      </>
    </CounterContextProvider>
  );
}

export default App;
