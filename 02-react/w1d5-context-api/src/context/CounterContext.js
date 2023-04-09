import { createContext } from 'react';
const CounterContext = createContext({ counter: 25, setCounter: () => {} });

export default CounterContext;
