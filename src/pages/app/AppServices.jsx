/* eslint-disable no-unused-vars */
import Row from "../../ui/global/Row";
import Heading from "../../ui/global/Heading";
import ServiceTableOperations from "../../features/services/ServiceTableOperations";
import ServiceTable from "../../features/services/ServiceTable";
import AddService from "../../features/services/AddService";

function AppServices() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All Services</Heading>
                {/* <ServiceTableOperations /> */}
            </Row>

            <Row edit="edit">
                <ServiceTable />

                <AddService />
            </Row>
        </>
    );
}

export default AppServices;

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
