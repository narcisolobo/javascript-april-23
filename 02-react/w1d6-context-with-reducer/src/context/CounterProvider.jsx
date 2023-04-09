import { useReducer } from 'react';
import CounterContext from './CounterContext';
import { counterReducer, inititalState } from '../reducers/counter-reducer';

function CounterProvider(props) {
  const [state, dispatch] = useReducer(counterReducer, inititalState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;
