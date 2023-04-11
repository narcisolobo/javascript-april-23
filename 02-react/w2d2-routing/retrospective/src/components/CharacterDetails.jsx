import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        setCharacter(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    character && (
      <div className="card mb-3">
        <h1 className="card-header">{character.name}</h1>
        <img src={character.image} alt="" className="card-img-top" />
        <div className="card-body">
          <p>
            <strong>Status: </strong>
            {character.status}
          </p>
          <p>
            <strong>Species: </strong>
            {character.species}
          </p>
        </div>
      </div>
    )
  );
}

export default CharacterDetails;
