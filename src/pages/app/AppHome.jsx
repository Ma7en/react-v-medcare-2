/* eslint-disable no-unused-vars */
// import { faker } from "@faker-js/faker";

import Heading from "../../ui/global/Heading";
import Row from "../../ui/global/Row";
import AppUserHome from "../user/home/AppHomeUser";

// import Heading from "../ui/Heading";
// import Row from "../ui/Row";
// import UserHome from "../ui/user/UserHome";

function AppHome() {
    // const randomQuote = faker.lorem.sentence();
    // console.log(randomQuote);

    // const randomQuote2 = quotes.getRandomQuote();
    // console.log(randomQuote2.text);
    // console.log(randomQuote2.author);

    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Home</Heading>
                {/* <p>TEST</p> */}
            </Row>
            <Row>
                <AppUserHome />
            </Row>
        </>
    );
}

export default AppHome;
