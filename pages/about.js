import About from "../components/about/About";
import { getData } from "../helpers/getData";

const path = "about";

const AboutPage = ({ data }) => {
  return <About data={data} />;
};

export async function getStaticProps() {
  const data = await getData(path);

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

export default AboutPage;
