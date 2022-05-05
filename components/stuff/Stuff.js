import { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import styles from './Stuff.module.css';

const Stuff = () => {
  const [data, setData] = useState([]);
  console.log({ data });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/stuff`)
    .then(res => res.json())
    .then(res => setData(res))
  }, []);

  return (
    <Layout>
      <div className={styles.Stuff}>
        <h1>Stuff Page</h1>
        <p>{data.content}</p>
      </div>
    </Layout>
  );
};

export default Stuff;
