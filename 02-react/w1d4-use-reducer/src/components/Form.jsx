import { useReducer, useState } from 'react';
import { initialFormState, formReducer } from '../reducers/formReducer';

function Form() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const [message, setMessage] = useState('Please complete the form.')

  let formIsValid =
    formState.firstName.error === null &&
    formState.lastName.error === null &&
    formState.email.error === null &&
    formState.password.error === null &&
    formState.confirmPassword.error === null;
  
  const handleChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Thank you for registering.');
    dispatch({ type: 'formSubmission' });
  }

  return (
    <div className="container">
      <div className="card mt-3 shadow-sm">
        <div className="card-body">
          <h4 className="card-title">{message}</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="form-control"
                placeholder="First Name:"
                value={formState.firstName.value}
                onChange={handleChange}
              />
              <label htmlFor="firstName">First Name:</label>
              {formState.firstName.error && (
                <span className="form-text text-danger">
                  {formState.firstName.error}
                </span>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="form-control"
                placeholder="Last Name:"
                value={formState.lastName.value}
                onChange={handleChange}
              />
              <label htmlFor="lastName">Last Name:</label>
              {formState.lastName.error && (
                <span className="form-text text-danger">
                  {formState.lastName.error}
                </span>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email:"
                value={formState.email.value}
                onChange={handleChange}
              />
              <label htmlFor="email">Email:</label>
              {formState.email.error && (
                <span className="form-text text-danger">
                  {formState.email.error}
                </span>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password:"
                value={formState.password.value}
                onChange={handleChange}
              />
              <label htmlFor="password">Password:</label>
              {formState.password.error && (
                <span className="form-text text-danger">
                  {formState.password.error}
                </span>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="form-control"
                placeholder="Confirm Password:"
                value={formState.confirmPassword.value}
                onChange={handleChange}
              />
              <label htmlFor="confirmPassword">Confirm Password:</label>
              {formState.confirmPassword.error && (
                <span className="form-text text-danger">
                  {formState.confirmPassword.error}
                </span>
              )}
            </div>
            <div className="text-end">
              <button
                className={`btn btn-primary ${!formIsValid ? 'disabled' : ''}`}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
