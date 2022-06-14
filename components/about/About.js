import styles from "./About.module.css";

function About({ data }) {
  return (
    <div className={styles.About}>
      <h1>About Page</h1>
      {data.content ? <p>{data.content}</p> : <p>No content found</p>}
    </div>
  );
}

export default About;
