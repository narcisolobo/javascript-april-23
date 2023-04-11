import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function LocationDetails() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((res) => {
        setLocation(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    location && (
      <div className="card mb-3">
        <h1 className="card-header">{location.name}</h1>
        <div className="card-body">
          <p>
            <strong>Type: </strong>
            {location.type}
          </p>
          <p>
            <strong>Dimension: </strong>
            {location.dimension}
          </p>
        </div>
      </div>
    )
  );
}

export default LocationDetails;
