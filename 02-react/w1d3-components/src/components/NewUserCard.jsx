import { useState } from 'react';

// 2 Requirements for Functional Components
// PascalCase Name
// Return JSX

function NewUserCard(props) {
  const [appearances, setAppearances] = useState(props.appearances);
  const { fullName, occupation } = props;

  const clickHandler = () => {
    setAppearances(appearances + 1);
  }

  return (
    <fieldset>
      <legend>New UserCard</legend>
      <h1>{fullName}</h1>
      <h2>{occupation}</h2>
      <p>No. of Appearances: {appearances}</p>
      <button onClick={clickHandler}>INCREASE COUNT</button>
    </fieldset>
  );
}

export default NewUserCard;
