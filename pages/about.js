import About from "../components/about/About";

const about = ({ data }) => {
  return <About data={data} />;
};

export async function getStaticProps() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/about`
  ).then((res) => res.json());

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

export default about;
