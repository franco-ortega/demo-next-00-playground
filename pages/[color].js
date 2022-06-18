import Color from '../components/color/Color';
import colors from '../data/colors';

const ColorPage = ({ slug }) => {
  return <Color color={slug.color} />;
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: colors.map((color) => ({
      params: {
        color,
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  return {
    props: {
      slug: await context.params,
    },
  };
};

export default ColorPage;
