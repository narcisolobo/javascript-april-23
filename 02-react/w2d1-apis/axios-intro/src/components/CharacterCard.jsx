function CharacterCard({ character }) {
  return (
    <div className="card">
      <img
        src={character.image}
        alt={character.name}
        className="card-img-top"
      />
      <div className="card-body">
        <h3>{character.name}</h3>
      </div>
    </div>
  );
}

export default CharacterCard;
