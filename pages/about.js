import About from '../components/about/About';
import { getData } from '../helpers/getData';

const AboutPage = ({ data }) => {
  return <About data={data} />;
};

export async function getStaticProps() {
  const data = await getData('about');

  return {
    props: {
      data,
    },
  };
}

export default AboutPage;
