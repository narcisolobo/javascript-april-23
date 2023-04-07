import { muppets } from '../data/muppets';
import MuppetCard from './MuppetCard';
import styles from '../css/MuppetList.module.css';

function MuppetList() {
  return (
    <div className={styles.grid}>
      {muppets.map((muppet) => {
        return <MuppetCard key={muppet.id} muppet={muppet} />;
      })}
    </div>
  );
}

export default MuppetList;
