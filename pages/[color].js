import Color from '../components/color/Color';
import colors from '../data/colors';

const ColorPage = ({ currentColor }) => {
  return <Color currentColor={currentColor} />;
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: colors.map((color) => ({
      params: {
        color: color.toLowerCase(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  const activeColor = await context.params;

  return {
    props: {
      currentColor: activeColor,
    },
  };
};

export default ColorPage;
