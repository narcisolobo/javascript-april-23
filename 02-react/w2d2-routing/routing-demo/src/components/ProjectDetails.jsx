import { useNavigate, useParams } from 'react-router-dom';

function ProjectDetails() {
  const params = useParams();
  const navigate = useNavigate();

  console.log(params);

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Project ID: {params.projectId}</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        GO HOME
      </button>
    </div>
  );
}

export default ProjectDetails;
