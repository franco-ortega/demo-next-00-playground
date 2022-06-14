import Home from '../components/home/Home';
import { getData } from '../helpers/getData';

const HomePage = ({ data }) => {
  return <Home data={data} />;
};

export async function getStaticProps() {
  const data = await getData('/home');

  return {
    props: {
      data,
    },
  };
}

export default HomePage;
