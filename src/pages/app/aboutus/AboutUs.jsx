// components
import AboutViewCom from "../../../ui/about/AboutViewCom";
import Links from "../../../ui/links/LinksCom";

// ui
import Main from "../../../ui/global/Main";

function AboutUs() {
    return (
        <>
            <Main type="loginpage" className="loginpage">
                <AboutViewCom />
                <Links />
            </Main>
        </>
    );
}

export default AboutUs;
