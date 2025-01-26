/* eslint-disable no-unused-vars */

// import BlogTableOperations from "../../features/blogs/BlogTableOperations";
import Row from "../../ui/global/Row";
import Heading from "../../ui/global/Heading";
import AddIconNumber from "../../features/iconsnumber/AddIconNumber";
import IconNumberTable from "../../features/iconsnumber/IconNumberTable";

function AppIconsNumber() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All IconsNumber</Heading>
                {/* <BlogTableOperations /> */}
            </Row>

            <Row>
                <IconNumberTable />

                <AddIconNumber />
            </Row>
        </>
    );
}

export default AppIconsNumber;

{
    // import { getCabins } from "../services/apiCabins";
    // import { useEffect } from "react";
    // useEffect(function () {
    //     getCabins().then((data) => console.log(data));
    // }, []);
    /* <img
   
        alt=""
    /> */
}
