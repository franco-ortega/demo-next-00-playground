import Event from '../../components/event/Event';
import events from '../../data/events';

const EventPage = ({ slug }) => {
  return <Event event={slug.event} />;
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: events.map((event) => ({
      params: {
        event,
      },
    })),
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      slug: await context.params,
    },
  };
}

export default EventPage;
