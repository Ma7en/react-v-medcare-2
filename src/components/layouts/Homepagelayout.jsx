/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { Outlet } from "react-router-dom";

// ui component
// import Goicon from "../../ui/goicon/GoIcon";
import Header from "../../ui/header/Header";
import Footer from "../../ui/footer/Footer";

const Main = styled.main`
    overflow: hidden;
`;

function HomepageLayout() {
    return (
        <>
            {/* <Goicon /> */}
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
}

export default HomepageLayout;
