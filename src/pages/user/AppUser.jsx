// components
import AppHomeUser from "./home/AppHomeUser";

// ui
import Heading from "../../ui/global/Heading";
import Row from "../../ui/global/Row";

function AppUser() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Home</Heading>
                {/* <p>TEST</p> */}
            </Row>
            <Row>
                <AppHomeUser />
            </Row>
        </>
    );
}

export default AppUser;
