import axios from 'axios';
import styles from './CharacterList.module.css';
import { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';

function CharacterList() {
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');
  const [prevUrl, setPrevUrl] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [characters, setCharacters] = useState(null);

  // useEffect fires only AFTER the component is rendered!
  // Component Did Mount
  // Component Has Updated
  // Component Will Unmount
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPrevUrl(res.data.info.prev);
        setNextUrl(res.data.info.next);
        setCharacters(res.data.results);
      })
      .catch((err) => console.error(err));
    // dependency array
    // if you're setting state in a useEffect,
    // always have primitive values in the
    // dependency array
  }, [url]);

  const handlePrevClick = () => {
    setUrl(prevUrl);
  };

  const handleNextClick = () => {
    setUrl(nextUrl);
  };

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between">
        <button
          className={`btn btn-primary ${!prevUrl ? 'disabled' : ''}`}
          onClick={handlePrevClick}>
          PREV
        </button>
        <button
          className={`btn btn-primary ${!nextUrl ? 'disabled' : ''}`}
          onClick={handleNextClick}>
          NEXT
        </button>
      </div>
      <div className="card-body">
        <div className="card">
          <div className={styles.grid}>
            {characters &&
              characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
          </div>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button
          className={`btn btn-primary ${!prevUrl ? 'disabled' : ''}`}
          onClick={handlePrevClick}>
          PREV
        </button>
        <button
          className={`btn btn-primary ${!nextUrl ? 'disabled' : ''}`}
          onClick={handleNextClick}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default CharacterList;
