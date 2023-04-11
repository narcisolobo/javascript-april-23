import axios from 'axios';
import { useEffect, useState } from 'react';

function Locations() {
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/location');
  const [prevUrl, setPrevUrl] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPrevUrl(res.data.info.prev);
        setNextUrl(res.data.info.next);
        setLocations(res.data.results);
      })
      .catch((err) => console.error(err));
  }, [url]);

  const handlePrevClick = () => {
    setUrl(prevUrl);
  };

  const handleNextClick = () => {
    setUrl(nextUrl);
  };

  return (
    <div className="card mb-5">
      <div className="card-header d-flex justify-content-between">
        <button
          onClick={handlePrevClick}
          className={`btn btn-sm btn-outline-light ${
            prevUrl ? '' : 'disabled'
          }`}>
          PREV
        </button>
        <button
          onClick={handleNextClick}
          className={`btn btn-sm btn-outline-light ${
            nextUrl ? '' : 'disabled'
          }`}>
          NEXT
        </button>
      </div>
      <div className="card-body">
        <h1>Locations</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>TYPE</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.id}>
                <td>{location.id}</td>
                <td>{location.name}</td>
                <td>{location.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button
          onClick={handlePrevClick}
          className={`btn btn-sm btn-outline-light ${
            prevUrl ? '' : 'disabled'
          }`}>
          PREV
        </button>
        <button
          onClick={handleNextClick}
          className={`btn btn-sm btn-outline-light ${
            nextUrl ? '' : 'disabled'
          }`}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Locations;
