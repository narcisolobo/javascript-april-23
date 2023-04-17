import { Fragment, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { dogTypes, initialDog } from '../data/dog-types';

function ArrayForm() {
  const [dog, setDog] = useState(initialDog);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDog((prevDog) => ({
      ...prevDog,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/dogs', dog)
      .then((res) => {
        console.log(res.data);
        navigate('/success');
      })
      .catch((err) => {
        console.error(err);
        const errorResponse = err?.response?.data?.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
    setDog(initialDog);
  };

  return (
    <Fragment>
      {errors.length > 0 && (
        <div className="card shadow mb-3">
          <div className="card-body">
            {errors.map((err, index) => (
              <p key={index}>{err}</p>
            ))}
          </div>
        </div>
      )}
      <div className="card shadow mb-3">
        <h3 className="card-header">Add Your Dog (Array Option)</h3>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="dogName" className="form-label">
                Name:
              </label>
              <input
                type="text"
                name="dogName"
                id="dogName"
                className="form-control"
                value={dog.dogName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dogType" className="form-label">
                Type:
              </label>
              <select
                name="dogType"
                id="dogType"
                className="form-select"
                value={dog.dogType}
                onChange={handleChange}>
                <option value="">Please select type...</option>
                {dogTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="dogAge" className="form-label">
                Age:
              </label>
              <input
                type="number"
                name="dogAge"
                id="dogAge"
                className="form-control"
                step={0.5}
                value={dog.dogAge}
                onChange={handleChange}
              />
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-primary">
                Add Dog
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default ArrayForm;
