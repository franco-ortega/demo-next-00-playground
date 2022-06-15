import styles from './Event.module.css';

const Event = ({ currentSlug }) => {
  return (
    <div className={styles.Event}>
      <h1>Event Page</h1>
      <p>
        This is the{' '}
        {currentSlug.slug &&
          currentSlug.slug.charAt(0).toUpperCase() +
            currentSlug.slug.substring(1)}{' '}
        page of Event.
      </p>
    </div>
  );
};

export default Event;
