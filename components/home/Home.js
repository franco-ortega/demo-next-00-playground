import styles from './Home.module.css';

const Home = ({ data }) => {
  return (
    <div className={styles.Home}>
      <h1>Home Page</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default Home;
