import { useRouter } from "next/router";

const Event = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <h2>Event Page</h2>
      <p>{slug && slug.charAt(0).toUpperCase() + slug.substring(1)}</p>
    </>
  );
};

export default Event;
