import styles from './About.module.css';

const About = ({ data }) => {
  return (
    <div className={styles.About}>
      <h1>About Page</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default About;
