import About from '../components/about/About';
import { getData } from '../helpers/getData';

const AboutPage = ({ data }) => {
  return <About data={data} />;
};

export async function getStaticProps() {
  const res = await getData('about');
  const data = res.content ? res : { content: 'No content found' };

  return {
    props: {
      data,
    },
  };
}

export default AboutPage;
