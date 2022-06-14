// import { useEffect, useState } from "react";

import Loading from "../loading/Loading";
import styles from "./About.module.css";

function About({ data }) {
  // const [data, setData] = useState([]);
  if (data) console.log(data);
  console.log('EHLLO!? About')

  // useEffect(() => {
  //   fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/about`)
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // }, []);

  return data ? (
    <Loading />
  ) : (
    <div className={styles.About}>
      <h1>About Page</h1>
      {/* <p>{data}</p> */}
    </div>
  );
}

export function getStaticPaths() {
  return {
    fallback: "blocking",
    paths: [
      {
        params: {
          about: "about",
        },
      },
    ],
  };
}

export async function getStaticProps() {
  const data = await fetch(`../../pages/api/about`)
    .then((res) => res.json())
    // .then((res) => console.log(res));
  // .then((res) => setData(res));
  console.log('EHLLO!? getStatic')
  console.log(data);

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

export default About;
