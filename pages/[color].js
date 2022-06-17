import Color from '../components/color/Color';
import colors from '../data/colors';

const ColorPage = ({ activeColor }) => {
  return <Color color={activeColor.color} />;
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
      activeColor: await context.params,
    },
  };
};

export default ColorPage;
