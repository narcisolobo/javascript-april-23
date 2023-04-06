import { useState } from 'react';

function AlbumFormObject() {
  const [album, setAlbum] = useState({
    albumTitle: '',
    albumArtist: '',
    trackNumber: '',
  });

  const handleChange = (e) => {
    console.log(e);
    // computed property name
    setAlbum({
      ...album,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
              value={album.albumTitle}
              onChange={handleChange}
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
              value={album.albumArtist}
              onChange={handleChange}
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
              value={album.trackNumber}
              onChange={handleChange}
            />
            <label htmlFor="trackNumber">Track Number:</label>
          </div>
          <div className="text-end">
            <button type="submit" className={`btn btn-outline-success`}>
              Add Album
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AlbumFormObject;
