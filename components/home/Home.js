import { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import Loading from '../loading/Loading';
import styles from './Home.module.css';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home`)
    .then(res => res.json())
    .then(res => setData(res))
  }, []);

  return (
    <Layout>
      {data.length === 0
      ? 
        <Loading />
      :
        <div className={styles.Home}>
          <h1>Home Page</h1>
          <p>{data.content}</p>
        </div>
      }
    </Layout>
  );
};

export default Home;
