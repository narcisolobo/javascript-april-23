function MuppetCard({ muppet }) {
  const { image, name, catchphrase } = muppet;

  return (
    <div className="card shadow">
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title mb-3">{name}</h3>
        <p className="card-text mb-2">
          <strong>Catchphrase: </strong>
          {catchphrase}
        </p>
      </div>
    </div>
  );
}

export default MuppetCard;
