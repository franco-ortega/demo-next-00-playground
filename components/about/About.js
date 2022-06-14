import { useEffect, useState } from "react";

import Loading from "../loading/Loading";
import styles from "./About.module.css";

const About = () => {
  const [data, setData] = useState([]);
  console.log({ data });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/about`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return data.length === 0 ? (
    <Loading />
  ) : (
    <div className={styles.About}>
      <h1>About Page</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default About;
