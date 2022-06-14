import { useRouter } from "next/router";
import styles from './slug.module.css'

const Event = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.slug}>
      <h1>Event Page</h1>
      <p>This is the {slug && slug.charAt(0).toUpperCase() + slug.substring(1)} page of Event.</p>
    </div>
  );
};

export default Event;
