import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import styles from "./Stuff.module.css";

const Stuff = () => {
  const [data, setData] = useState([]);
  // console.log({ data });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/stuff`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return data.length === 0 ? (
    <Loading />
  ) : (
    <div className={styles.Stuff}>
      <h1>Stuff Page</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default Stuff;
