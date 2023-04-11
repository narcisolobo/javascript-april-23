import puppy from '../images/puppy-in-a-mug.jpg';
import styles from '../css/NotFound.module.css';

function NotFound() {
  return (
    <div className="container">
      <div className={styles.grid}>
        <img className="rounded shadow" src={puppy} alt="Puppy in a mug." />
        <div>
          <h2 className="fs-1">404 Not Found</h2>
          <h3>Sorry, we couldn't find that page.</h3>
          <p>Here, have this picture of a puppy in a mug instead.</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
