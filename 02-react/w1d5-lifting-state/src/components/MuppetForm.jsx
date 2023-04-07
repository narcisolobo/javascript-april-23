import { useState } from 'react';

function MuppetForm({ setMuppets, muppets }) {
  const [muppet, setMuppet] = useState({
    image: '',
    name: '',
    catchphrase: '',
  });

  const handleChange = (e) => {
    setMuppet((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(muppet);
    setMuppets((prev) => [muppet, ...prev])
    setMuppet({
      image: '',
      name: '',
      catchphrase: '',
    })
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        <h3 className="card-title mb-3">Add a Muppet</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={muppet.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="catchphrase" className="form-label">
              Catchphrase:
            </label>
            <input
              type="text"
              name="catchphrase"
              id="catchphrase"
              className="form-control"
              value={muppet.catchphrase}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image URL:
            </label>
            <input
              type="text"
              name="image"
              id="image"
              className="form-control"
              value={muppet.image}
              onChange={handleChange}
            />
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-outline-primary">
              Add Muppet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MuppetForm;
