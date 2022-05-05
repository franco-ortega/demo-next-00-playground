import { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import styles from './About.module.css';

const About = () => {
  const [data, setData] = useState([]);
  console.log({ data });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/about`)
    .then(res => res.json())
    .then(res => setData(res))
  }, []);


  return (
    <Layout>
      <div className={styles.About}>
        <h1>About Page</h1>
        <p>{data.content}</p>
      </div>
    </Layout>
  );
};

export default About;
