import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { dogTypes, initialDog } from '../data/dog-types';

function ObjectForm() {
  const navigate = useNavigate();
  const [dog, setDog] = useState(initialDog);
  const [errors, setErrors] = useState({});

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
        const errorResponse = err?.response?.data?.errors;
        const errorObj = {};
        for (const key in errorResponse) {
          errorObj[key] = errorResponse[key].message;
        }
        setErrors(errorObj);
      });
    setDog(initialDog);
  };

  return (
    <div className="card shadow mb-3">
      <h3 className="card-header">Add Your Dog (Object Option)</h3>
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
            {errors?.dogName && (
              <span className="form-text text-warning">{errors.dogName}</span>
            )}
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
            {errors?.dogType && (
              <span className="form-text text-warning">{errors.dogType}</span>
            )}
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
            {errors?.dogAge && (
              <span className="form-text text-warning">{errors.dogAge}</span>
            )}
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              Add Dog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ObjectForm;
