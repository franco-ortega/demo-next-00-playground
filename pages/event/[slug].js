import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout"

const Event = () => {
    const router = useRouter();
    const { slug } = router.query;

    return(
        <Layout>
            <h2>Event Page</h2>
            <p>{slug && slug.charAt(0).toUpperCase() + slug.substring(1)}</p>
        </Layout>
    );
};

export default Event;
 