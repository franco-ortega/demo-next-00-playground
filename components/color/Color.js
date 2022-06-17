import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';
import styles from './Color.module.css';

const Color = ({ currentColor }) => {
  const color = currentColor.color;

  return (
    <div className={styles.Color}>
      <h1>Color Page</h1>
      <p style={{ color: color }}>
        This is the {capitalizeFirstLetter(color)} page of Event.
      </p>
    </div>
  );
};

export default Color;
