import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import dogTypes from '../data/dog-types';

const initialDog = {
  dogName: '',
  dogType: '',
  dogAge: '',
  dogGender: 'female',
  dogIsDerpy: true,
  dogImage: '',
  dogDescription: '',
};

function AddDogForm({ setIsLoaded }) {
  const nameInputRef = useRef();
  const [dog, setDog] = useState(initialDog);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setDog((prevDog) => ({
      ...prevDog,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheck = () => {
    setDog((prevDog) => ({
      ...prevDog,
      dogIsDerpy: !dog.dogIsDerpy,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/dogs', dog)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
    setDog(initialDog);
    setIsLoaded(false);
  };

  return (
    <div className="card shadow mb-3">
      <h3 className="card-header">Add Your Dog</h3>
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
              ref={nameInputRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dogImage" className="form-label">
              Image (URL):
            </label>
            <input
              type="text"
              name="dogImage"
              id="dogImage"
              className="form-control"
              value={dog.dogImage}
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
          <div className="mb-3">
            <label htmlFor="dogDescription" className="form-label">
              Description:
            </label>
            <textarea
              name="dogDescription"
              id="dogDescription"
              className="form-control"
              value={dog.dogDescription}
              onChange={handleChange}></textarea>
          </div>
          <div className="mb-3">
            <fieldset>
              <legend className="fs-6">Gender:</legend>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="dogGender"
                  id="male"
                  value="male"
                  checked={dog.dogGender === 'male'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="dogGender"
                  id="female"
                  value="female"
                  checked={dog.dogGender === 'female'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </fieldset>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={dog.dogIsDerpy}
                id="dogIsDerpy"
                name="dogIsDerpy"
                onChange={handleCheck}
              />
              <label className="form-check-label" htmlFor="dogIsDerpy">
                Derpy?
              </label>
            </div>
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

export default AddDogForm;
