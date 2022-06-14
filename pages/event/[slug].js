import styles from './slug.module.css';

const Event = ({ currentSlug }) => {

  return (
    <div className={styles.SlugStyles}>
      <h1>Event Page</h1>
      <p>
        This is the{' '}
        {currentSlug.slug &&
          currentSlug.slug.charAt(0).toUpperCase() + currentSlug.slug.substring(1)}{' '}
        page of Event.
      </p>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          slug: 'one',
        },
      },
      {
        params: {
          slug: 'two',
        },
      },
      {
        params: {
          slug: 'three',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const activeLink = await context.params;
  console.log(activeLink);

  return {
    props: {
      currentSlug: activeLink
    },
  };
}

export default Event;
