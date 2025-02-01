import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

// style

// ui
import Heading from "../global/Heading";
import Button from "../global/Button";

// assets
import landingpage from "../../assets/images/home/home-img.svg";

function Landing() {
    const navigate = useNavigate();

    return (
        <>
            <section className="landing" id="landing">
                <div className="container">
                    <div className="image" data-aos="fade-right">
                        <img src={landingpage} alt={`home page - landing`} />
                    </div>

                    <div className="content" data-aos="fade-left">
                        <Heading as="h3">stay safe, stay healthy</Heading>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rem sed autem vero? Magnam, est laboriosam!
                        </p>

                        {/* <Link to="/book" className="btn">
                            <span>contact us</span>
                            <FaChevronRight />
                        </Link> */}
                        <Button
                            to="/book"
                            // className="btn"
                            onClick={() => {
                                navigate("/contact");
                            }}
                        >
                            <span>contact us</span>
                            <FaChevronRight />
                        </Button>
                    </div>
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default Landing;
