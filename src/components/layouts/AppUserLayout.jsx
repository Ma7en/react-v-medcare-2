// import
import { Outlet } from "react-router-dom";

// ui component
import Header from "../../ui/header/Header";
import Footer from "../../ui/footer/Footer";
import Goicon from "../../ui/goicon/GoIcon";

function AppUserLayout() {
    return (
        <>
            {/* <Information /> */}
            <Goicon />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default AppUserLayout;
