import axios from 'axios';

import { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  const baseUrl = 'http://localhost:8000/api/dogs';

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => setDog(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    dog && (
      <div className="row">
        <div className="col">
          <img
            src={dog.dogImage}
            alt={dog.dogName}
            className="img-fluid shadow rounded mb-3"
          />
        </div>
        <div className="col">
          <div className="card shadow">
            <h3 className="card-header">{dog.dogName}</h3>
            <div className="card-body">
              <h5 className="card-title">This is {dog.dogName}!</h5>
              <p className="card-text">
                <em>
                  {dog.dogIsDerpy
                    ? 'This dog is super derpy.'
                    : 'This dog is so not derpy.'}
                </em>
              </p>
              <p className="card-text">
                <strong>Type: </strong>
                {dog.dogType}
              </p>
              <p className="card-text">
                <strong>Age: </strong>
                {dog.dogAge}
              </p>
              <p className="card-text">
                <strong>Gender: </strong>
                {dog.dogGender}
              </p>
              <p className="card-text">
                <strong>Description: </strong>
                {dog.dogDescription}
              </p>
            </div>
            <div className="card-footer text-end">
              <Link to={`/dogs/${id}/edit`} className="btn btn-sm btn-primary">
                Edit Dog
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Detail;
