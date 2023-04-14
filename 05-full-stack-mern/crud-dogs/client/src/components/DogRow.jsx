import axios from 'axios';
import { Link } from 'react-router-dom';

function DogRow({ dog, setIsLoaded }) {
  const baseUrl = 'http://localhost:8000/api/dogs';

  const handleDelete = () => {
    axios
      .delete(`${baseUrl}/${dog._id}`)
      .then((res) => {
        console.log(res.data);
        setIsLoaded(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <tr>
      <td className="align-middle">
        <Link to={`/dogs/${dog._id}`}>{dog.dogName}</Link>
      </td>
      <td className="align-middle">{dog.dogType}</td>
      <td className="align-middle">{dog.dogGender}</td>
      <td className="align-middle">
        <button className="btn btn-sm btn-danger" onClick={handleDelete}>
          DELETE
        </button>
      </td>
    </tr>
  );
}

export default DogRow;
