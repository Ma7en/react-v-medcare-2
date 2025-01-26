/* eslint-disable no-unused-vars */

import UpdateAboutUsForm from "../../features/aboutus/UpdateAboutUsForm";
import { useAboutUs } from "../../features/aboutus/useAboutUs";
import Heading from "../../ui/global/Heading";
import Row from "../../ui/global/Row";
import Spinner from "../../ui/spinner/Spinner";

function AppAboutUs() {
    const { isLoading, aboutus } = useAboutUs();

    // console.log(`a`, aboutus);

    if (isLoading) return <Spinner />;
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">AboutUs</Heading>
            </Row>

            <Row>
                {aboutus?.map((about) => (
                    <UpdateAboutUsForm key={about.id} about={about} />
                ))}
            </Row>

            {/* <Row></Row> */}
        </>
    );
}

export default AppAboutUs;

{
    // import { getCabins } from "../services/apiCabins";
    // import { useEffect } from "react";
    // useEffect(function () {
    //     getCabins().then((data) => console.log(data));
    // }, []);
    /* <img
        // src="https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        src="https://qxnddsjybxitlfnsokfe.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        alt=""
    /> */
}
