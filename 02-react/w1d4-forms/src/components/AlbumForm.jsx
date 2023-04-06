import { useState } from 'react';

function AlbumForm() {
  const [albumTitle, setAlbumTitle] = useState('');
  const [albumTitleErrors, setAlbumTitleErrors] = useState('');
  const [albumArtist, setAlbumArtist] = useState('');
  const [albumArtistErrors, setAlbumArtistErrors] = useState('');
  const [trackNumber, setTrackNumber] = useState('');
  const [trackNumberErrors, setTrackNumberErrors] = useState('');
  const [albumGenre, setAlbumGenre] = useState('');
  const [albumGenreErrors, setAlbumGenreErrors] = useState('');
  const [isOwned, setIsOwned] = useState(false);
  const [isOwnedErrors, setIsOwnedErrors] = useState('');
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  localStorage.setItem('id', '123abc')

  let formIsValid = false;
  formIsValid =
    albumTitleErrors === null &&
    albumArtistErrors === null &&
    trackNumberErrors === null &&
    albumGenreErrors === null &&
    isOwnedErrors === null;

  const handleTitleChange = (e) => {
    setAlbumTitle(e.target.value);
    if (e.target.value.trim().length < 2) {
      setAlbumTitleErrors('Title must be at least two characters.');
    } else {
      setAlbumTitleErrors(null);
    }
  };

  const handleArtistChange = (e) => {
    setAlbumArtist(e.target.value);
    if (e.target.value.trim().length < 2) {
      setAlbumArtistErrors('Artist must be at least two characters.');
    } else {
      setAlbumArtistErrors(null);
    }
  };

  const handleTracksChange = (e) => {
    setTrackNumber(e.target.value);
    if (Number.isNaN(e.target.value)) {
      setTrackNumberErrors('Please enter a number.');
    } else {
      setTrackNumberErrors(null);
    }
  };

  const handleGenreChange = (e) => {
    setAlbumGenre(e.target.value);
    if (e.target.value.trim() === 'Polka') {
      setAlbumGenreErrors('Please select a real genre.');
    } else {
      setAlbumGenreErrors(null);
    }
  };

  const handleToggleOwned = (e) => {
    setIsOwned(e.target.checked);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const album = { albumTitle, albumArtist, trackNumber, albumGenre };
    console.log(album);
    setFormIsSubmitted(true);
    setAlbumTitle('');
    setAlbumArtistErrors('');
    setAlbumArtist('');
    setAlbumArtistErrors('');
    setTrackNumber('');
    setTrackNumberErrors('');
    setAlbumGenre('');
    setAlbumGenreErrors('');
  };

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h3 className="card-title">
          {formIsSubmitted
            ? 'Thank you for adding your album.'
            : 'Please complete the form.'}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            {/* controlled input */}
            <input
              type="text"
              name="albumTitle"
              id="albumTitle"
              className="form-control"
              placeholder="Album Title"
              value={albumTitle}
              onChange={handleTitleChange}
            />
            <label htmlFor="albumTitle">Album Title:</label>
            {/* truthy or falsey */}
            {albumTitleErrors && (
              <span className="form-text text-danger">{albumTitleErrors}</span>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="albumArtist"
              id="albumArtist"
              className="form-control"
              placeholder="Album Artist"
              value={albumArtist}
              onChange={handleArtistChange}
            />
            <label htmlFor="albumArtist">Album Artist:</label>
            {albumArtistErrors && (
              <span className="form-text text-danger">{albumArtistErrors}</span>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              name="trackNumber"
              id="trackNumber"
              className="form-control"
              placeholder="Track Number"
              value={trackNumber}
              onChange={handleTracksChange}
            />
            <label htmlFor="trackNumber">Track Number:</label>
            {trackNumberErrors && (
              <span className="form-text text-danger">{trackNumberErrors}</span>
            )}
          </div>
          <div className="form-floating mb-3">
            <select
              className="form-select"
              id="albumGenre"
              name="albumGenre"
              value={albumGenre}
              onChange={handleGenreChange}>
              <option hidden disabled value="">
                Select Genre
              </option>
              <option value="R&B">R&B</option>
              <option value="Soul">Soul</option>
              <option value="Funk">Funk</option>
              <option value="Polka">Polka</option>
            </select>
            <label htmlFor="albumGenre">Select Genre</label>
            {albumGenreErrors && (
              <span className="form-text text-danger">{albumGenreErrors}</span>
            )}
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={isOwned}
              id="isOwned"
              name='isOwned'
              onChange={handleToggleOwned}
            />
            <label className="form-check-label" htmlFor="isOwned">
              Owned?
            </label>
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

export default AlbumForm;
