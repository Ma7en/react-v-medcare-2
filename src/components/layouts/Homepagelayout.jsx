// import
import { Outlet } from "react-router-dom";

// ui component
// import Goicon from "../../ui/goicon/GoIcon";
import Header from "../../ui/header/Header";
import Footer from "../../ui/footer/Footer";

function HomepageLayout() {
    return (
        <>
            {/* <Goicon /> */}
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default HomepageLayout;
