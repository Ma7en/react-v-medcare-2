import { useLanding } from "../../features/landing/useLanding";

import Spinner from "../../ui/spinner/Spinner";
import Heading from "../../ui/global/Heading";
import Row from "../../ui/global/Row";
import UpdateLandingForm from "../../features/landing/UpdateLandingForm";

function AppLanding() {
    const { isLoading, landing } = useLanding();

    if (isLoading) return <Spinner />;
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All Landing</Heading>
            </Row>

            <Row>
                {landing.map((landing) => (
                    <UpdateLandingForm key={landing.id} landing={landing} />
                ))}
            </Row>
        </>
    );
}

export default AppLanding;

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
