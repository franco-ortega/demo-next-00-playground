import styles from './Stuff.module.css';

const Stuff = ({ data }) => {
  return (
    <div className={styles.Stuff}>
      <h1>Stuff Page</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default Stuff;
