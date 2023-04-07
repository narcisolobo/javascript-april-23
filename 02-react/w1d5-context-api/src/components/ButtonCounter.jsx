import { useContext } from "react";
import CounterContext from "../context/CounterContext";

function Button() {
  const { setCounter } = useContext(CounterContext);
  const handleClick = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  return (
    <fieldset>
      <legend>Button</legend>
      <button onClick={handleClick}>INCREASE COUNT</button>
    </fieldset>
  );
}

export default Button;
