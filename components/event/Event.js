import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';
import styles from './Event.module.css';

const Event = ({ currentSlug }) => {
  const eventNumber = currentSlug.slug;

  return (
    <div className={styles.Event}>
      <h1>Event Page</h1>
      <p>This is the Event {capitalizeFirstLetter(eventNumber)} page.</p>
    </div>
  );
};

export default Event;
