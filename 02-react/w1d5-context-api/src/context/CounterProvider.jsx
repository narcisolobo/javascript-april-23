import { useState } from 'react';
import CounterContext from "./CounterContext";

function CounterProvider(props) {
  const [counter, setCounter] = useState(38);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {props.children}
    </CounterContext.Provider>
  )
}

export default CounterProvider;
