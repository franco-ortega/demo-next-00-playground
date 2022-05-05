import { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import styles from './Home.module.css';

const Home = () => {
  const [data, setData] = useState([]);
  console.log({ data });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home`)
    .then(res => res.json())
    .then(res => setData(res))
  }, []);

  return (
    <Layout>
      <div className={styles.Home}>
        <h1>Home Page</h1>
        <p>{data.content}</p>
      </div>
    </Layout>
  );
};

export default Home;
