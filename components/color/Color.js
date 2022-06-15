import styles from './Color.module.css';

const Color = ({ currentColor }) => {
  return (
    <div className={styles.Color}>
      <h1>Color Page</h1>
      <p style={{ color: currentColor.color }}>
        This is the{' '}
        {currentColor.color &&
          currentColor.color.charAt(0).toUpperCase() +
            currentColor.color.substring(1)}{' '}
        page of Event.
      </p>
    </div>
  );
};

export default Color;
