import {
    FaChevronRight,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaPinterestP,
    FaTwitter,
    FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// ui
import Logo from "../header/Logo";

function LinksCom() {
    return (
        <>
            <section className="links">
                <div className="container">
                    <div className="brand">
                        <Logo />

                        <p className="slogan">
                            {/* Movies &amp; TV Shows, Online cinema,  */}
                            Medcare. hospital database ReactJS Template.
                        </p>

                        <div className="social">
                            <a href="#">
                                <FaFacebookF />
                            </a>
                            <a href="#">
                                <FaTwitter />
                            </a>
                            <a href="#">
                                <FaInstagram />
                            </a>
                            <a href="#">
                                <FaLinkedinIn />
                            </a>
                            <a href="#">
                                <FaPinterestP />
                            </a>
                        </div>
                    </div>

                    <div className="boxs">
                        <div className="box">
                            <h3>quick links</h3>

                            <ul>
                                <li>
                                    <Link to="/home">
                                        <FaChevronRight />
                                        <span>home</span>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link to="/services">
                                        <FaChevronRight />
                                        <span>services</span>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link to="/aboutus">
                                        <FaChevronRight />
                                        <span>aboutUs</span>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link to="/doctors">
                                        <FaChevronRight />
                                        <span>doctors</span>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link to="/book">
                                        <FaChevronRight />
                                        <span>book</span>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link to="/review">
                                        <FaChevronRight />
                                        <span>review</span>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link to="/blogs">
                                        <FaChevronRight />
                                        <span>blogs</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="box">
                            <h3>our services</h3>

                            <ul>
                                <li>
                                    <Link to="/edit">
                                        <FaChevronRight />
                                        <span>dental care</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/edit">
                                        <FaChevronRight />
                                        <span>message therapy</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/edit">
                                        <FaChevronRight />
                                        <span>cardioloty</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/edit">
                                        <FaChevronRight />
                                        <span>diagnosis</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/edit">
                                        <FaChevronRight />
                                        <span>ambulance service</span>
                                    </Link>
                                </li>
                            </ul>
                            {/* 
                            العناية بالأسنان
                            العلاج بالتدليك
                            أمراض القلب
                            تشخبص
                            خدمة الاسعاف
                            */}
                        </div>

                        <div className="box">
                            <h3>contact info</h3>

                            <ul>
                                <li>
                                    <a
                                        href="tel:020123-456-7890"
                                        rel="noreferrer"
                                    >
                                        <FaPhoneAlt />
                                        <span>+020123-456-7890</span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://wa.me/+020112223333"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaWhatsapp />
                                        <span>+02011-222-3333</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:shaikhanas@gmail.com?subject=Contact"
                                        rel="noreferrer"
                                    >
                                        <FaEnvelope />
                                        <span>shaikhanas@gmail.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:anasbhai@gmail.com?subject=Contact">
                                        <FaEnvelope />
                                        <span>anasbhai@gmail.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.google.com/maps/@29.3084021,30.8428497,13z?entry=ttu"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaMapMarkerAlt />
                                        <span>mumbai, india - 400104</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LinksCom;
