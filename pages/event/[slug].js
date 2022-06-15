import styles from './Event.module.css';
import links from '../../data/links';

const Event = ({ currentSlug }) => {
  return (
    <div className={styles.Event}>
      <h1>Event Page</h1>
      <p>
        This is the{' '}
        {currentSlug.slug &&
          currentSlug.slug.charAt(0).toUpperCase() +
            currentSlug.slug.substring(1)}{' '}
        page of Event.
      </p>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: links.map((link) => ({
      params: {
        slug: link.toLowerCase(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const activeLink = await context.params;

  return {
    props: {
      currentSlug: activeLink,
    },
  };
}

export default Event;
