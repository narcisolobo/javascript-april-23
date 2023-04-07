import { useState } from 'react';
import CounterContext from './CounterContext';

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{counter, setCounter}}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider;
