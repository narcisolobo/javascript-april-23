import { Link } from 'react-router-dom';
import { DUMMY_PROJECTS } from '../data/projects';

function Projects() {
  return (
    <div>
      <h1>All Projects</h1>
      <ul>
        {DUMMY_PROJECTS.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
