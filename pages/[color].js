import Color from '../components/color/Color';

const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Pink', 'Brown'];

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
  console.log(activeColor);

  return {
    props: {
      currentColor: activeColor,
    },
  };
};

export default ColorPage;
