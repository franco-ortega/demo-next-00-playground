import { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import styles from './About.module.css';

const About = () => {
  const [data, setData] = useState([]);
  console.log({ data });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/aboutRoute`)
    .then(res => res.json())
    .then(res => setData(res))
  }, []);


  return (
    <Layout>
      <section className={styles.About}>
        <h2>About Page</h2>
        <p>{data.about}</p>
      </section>
    </Layout>
  );
};

export default About;
