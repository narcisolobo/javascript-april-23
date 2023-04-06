import { useState } from 'react';

function AlbumFormObject() {
  const [album, setAlbum] = useState({
    title: '',
    artist: '',
    tracks: '',
  });

  const [albumErrors, setAlbumErrors] = useState({
    title: '',
    artist: '',
    tracks: '',
  });

  const handleChange = (e) => {
    console.log(e);
    // computed property name
    setAlbum({
      ...album,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    let error = '';
    switch (e.target.name) {
      case 'title':
        if (e.target.value.trim().length < 2) {
          error = 'Title must be at least two characters.';
        } else {
          error = null;
        }
        break;
      case 'artist':
        if (e.target.value.trim().length < 2) {
          error = 'Artist must be at least two characters.';
        } else {
          error = null;
        }
        break;
      case 'tracks':
        if (Number.isNaN(e.target.value)) {
          error = 'Please enter a number.';
        } else {
          error = null;
        }
        break;
      default:
        console.error('Unexpected target name.');
        break;
    }
    setAlbumErrors({
      ...albumErrors,
      [e.target.name]: error,
    });
  };

  let formIsValid =
    albumErrors.title === null &&
    albumErrors.artist === null &&
    albumErrors.tracks === null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(album);
    setAlbum({
      title: '',
      artist: '',
      tracks: '',
    });
  };

  return (
    <div className="card mt-3">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            {/* controlled input */}
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              placeholder="Album Title"
              value={album.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="title">Album Title:</label>
            {albumErrors.title && (
              <span className="form-text text-danger">{albumErrors.title}</span>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="artist"
              id="artist"
              className="form-control"
              placeholder="Album Artist"
              value={album.artist}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="artist">Album Artist:</label>
            {albumErrors.artist && (
              <span className="form-text text-danger">
                {albumErrors.artist}
              </span>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              name="tracks"
              id="tracks"
              className="form-control"
              placeholder="Track Number"
              value={album.tracks}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="tracks">Track Number:</label>
            {albumErrors.tracks && (
              <span className="form-text text-danger">
                {albumErrors.tracks}
              </span>
            )}
          </div>
          <div className="text-end">
            <button
              type="submit"
              className={`btn btn-outline-success ${
                formIsValid ? '' : 'disabled'
              }`}>
              Add Album
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AlbumFormObject;
