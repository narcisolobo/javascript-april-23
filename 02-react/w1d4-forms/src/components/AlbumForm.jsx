import { useState } from "react";

function AlbumForm() {
  const [albumTitle, setAlbumTitle] = useState('');
  const [albumArtist, setAlbumArtist] = useState('');
  const [trackNumber, setTrackNumber] = useState('');

  const handleTitleChange = (e) => {
    setAlbumTitle(e.target.value);
  }

  const handleArtistChange = (e) => {
    setAlbumArtist(e.target.value);
  }

  const handleTracksChange = (e) => {
    setTrackNumber(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const album = { albumTitle, albumArtist, trackNumber };
    console.log(album);
  }

  return (
    <div className="card mt-3">
      <div className="card-body">
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
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-outline-success">
              Add Album
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AlbumForm;
