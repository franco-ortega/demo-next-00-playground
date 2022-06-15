import Color from '../components/color/Color';

const ColorPage = ({ currentColor }) => {
  return <Color currentColor={currentColor} />;
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          color: 'red',
        },
      },
      {
        params: {
          color: 'green',
        },
      },
      {
        params: {
          color: 'blue',
        },
      },
      {
        params: {
          color: 'yellow',
        },
      },
      {
        params: {
          color: 'orange',
        },
      },
      {
        params: {
          color: 'pink',
        },
      },
      {
        params: {
          color: 'brown',
        },
      },
      {
        params: {
          color: 'blue',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const activeColor = await context.params;
  console.log(activeColor);

  return {
    props: {
      currentColor: activeColor,
    },
  };
}

export default ColorPage;
