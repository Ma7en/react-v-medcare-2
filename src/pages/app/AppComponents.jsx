/* eslint-disable no-unused-vars */

import BlogTableOperations from "../../features/blogs/BlogTableOperations";
import Heading from "../../ui/global/Heading";
import Row from "../../ui/global/Row";

function AppComponents() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All Components</Heading>
                <BlogTableOperations />
            </Row>

            <Row>
                {/* <BlogTable /> */}

                {/* <AddBlog /> */}
            </Row>
        </>
    );
}

export default AppComponents;

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
