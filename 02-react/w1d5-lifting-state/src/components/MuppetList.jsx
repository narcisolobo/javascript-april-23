import styles from '../css/MuppetList.module.css';
import MuppetCard from './MuppetCard';

function MuppetList({ muppets }) {
  return (
    <div className={styles.grid}>
      {muppets.map((muppet) => (
        <MuppetCard key={muppet.id} muppet={muppet} />
      ))}
    </div>
  );
}

export default MuppetList;
