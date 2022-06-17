import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';
import styles from './Event.module.css';

const Event = ({ event }) => {
  return (
    <div className={styles.Event}>
      <h1>Event Page</h1>
      <p>This is the Event {capitalizeFirstLetter(event)} page.</p>
    </div>
  );
};

export default Event;
