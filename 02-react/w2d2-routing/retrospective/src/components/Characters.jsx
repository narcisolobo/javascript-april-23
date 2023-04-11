import axios from 'axios';
import { useEffect, useState } from 'react';

function Characters() {
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');
  const [prevUrl, setPrevUrl] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPrevUrl(res.data.info.prev);
        setNextUrl(res.data.info.next);
        setCharacters(res.data.results);
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
        <h1>Characters</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>SPECIES</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character) => (
              <tr key={character.id}>
                <td>{character.id}</td>
                <td>{character.name}</td>
                <td>{character.species}</td>
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

export default Characters;
