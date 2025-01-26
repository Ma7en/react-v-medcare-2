import Footer from "../footer/Footer";
import Header from "../header/Header";
import LinksCom from "../links/LinksCom";
import AdminsComView from "./AdminsComView";

function Admins() {
    return (
        <>
            <Header />
            <AdminsComView />
            <LinksCom />
            <Footer />
        </>
    );
}

export default Admins;
