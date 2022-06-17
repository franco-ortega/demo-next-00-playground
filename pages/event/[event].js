import Event from '../../components/event/Event';
import events from '../../data/events';

const EventPage = ({ activeEvent }) => {
  return <Event event={activeEvent.event} />;
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: events.map((event) => ({
      params: {
        event: event,
      },
    })),
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      activeEvent: await context.params,
    },
  };
}

export default EventPage;
