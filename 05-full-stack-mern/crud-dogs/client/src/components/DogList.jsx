import DogRow from './DogRow';

function DogList({ dogs, setIsLoaded }) {
  return (
    <div className="card shadow">
      <h3 className="card-header">All Dogs</h3>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name:</th>
              <th>Type:</th>
              <th>Gender:</th>
              <th>Actions:</th>
            </tr>
          </thead>
          <tbody>
            {dogs.map((dog) => (
              <DogRow key={dog._id} dog={dog} setIsLoaded={setIsLoaded} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DogList;
