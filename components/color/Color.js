import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';
import styles from './Color.module.css';

const Color = ({ color }) => {
  return (
    <div className={styles.Color} style={{ backgroundColor: color }}>
      <h1>Color Page</h1>
      <p>This is the {capitalizeFirstLetter(color)} page.</p>
    </div>
  );
};

export default Color;
