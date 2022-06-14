import Stuff from '../components/stuff/Stuff';
import { getData } from '../helpers/getData';

const StuffPage = ({ data }) => {
  return <Stuff data={data} />;
};

export async function getStaticProps() {
  const data = await getData('stuff');

  return {
    props: {
      data,
    },
  };
}


export default StuffPage;
