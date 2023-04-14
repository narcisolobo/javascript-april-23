import { Fragment } from 'react';
import { useEffect, useState } from 'react';

import AddDogForm from './AddDogForm';
import DogList from './DogList';

import axios from 'axios';

function Main() {
  const baseUrl = 'http://localhost:8000/api/dogs';
  const [dogs, setDogs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => {
        setDogs(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [isLoaded]);

  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <AddDogForm setIsLoaded={setIsLoaded} />
        </div>
        <div className="col">
          {isLoaded && <DogList dogs={dogs} setIsLoaded={setIsLoaded} />}
        </div>
      </div>
    </Fragment>
  );
}

export default Main;
