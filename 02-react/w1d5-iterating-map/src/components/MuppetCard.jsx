function MuppetCard({ muppet }) {
  return (
    <div className="card shadow">
      <img src={muppet.image} alt={muppet.name} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title mb-3">{muppet.name}</h3>
        <p className="card-text mb-2">
          <strong>Catchphrase: </strong>
          {muppet.catchphrase}
        </p>
      </div>
    </div>
  )
}

export default MuppetCard;
