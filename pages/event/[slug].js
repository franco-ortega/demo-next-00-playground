import Event from '../../components/event/Event';
import links from '../../data/links';

const EventPage = ({ currentSlug }) => {
  return <Event currentSlug={currentSlug} />;
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: links.map((link) => ({
      params: {
        slug: link,
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

export default EventPage;
