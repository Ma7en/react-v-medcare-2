/* eslint-disable no-unused-vars */
import {
    FaAmbulance,
    FaChevronRight,
    FaHeartbeat,
    FaNotesMedical,
    FaPills,
    FaProcedures,
    FaUserMd,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// style
import "./ServicesCom.scss";

// import { FaChevronRight, FaNotesMedical } from "react-icons/fa";
// import { services } from "../../utils/vars";
// import { useServices } from "../../features/services/useServices";

// data
import { services } from "../../data/variablesdata";

// components
import ServiceCom from "./ServiceCom";

// ui components
import Button from "../global/Button";
import Heading from "../global/Heading";
import Spinner from "../spinner/Spinner";
import Empty from "../error/Empty";

function ServicesCom() {
    // const { isLoading, services } = useServices();
    // const { isLoading, services } = useState({});
    const navigate = useNavigate();

    // console.log(`s--`, services);

    // const x = services;
    // console.log(`x`, x);

    // const x = FaNotesMedical();
    // const y = `<${x} />`;
    // <div>
    // {/* ss */}d{x}
    // {/* {y} */}
    // </div>

    // if (isLoading) return <Spinner />;
    if (!services) return <Empty resourceName="service" />;

    return (
        <>
            <section className="services" id="services">
                <div className="waves">
                    <div className="wave" id="wave1" />
                    <div className="wave" id="wave2" />
                    <div className="wave" id="wave3" />
                    <div className="wave" id="wave4" />
                </div>

                <div className="container">
                    <Heading as="h2">
                        our
                        <span>services</span>
                    </Heading>

                    <div className="box-container">
                        {services?.length > 0 &&
                            services?.map((service, index) => (
                                <ServiceCom service={service} key={index} />
                            ))}

                        {/* <div className="box">
                            <FaNotesMedical />
                            <h3>free checkups</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Ad, omnis.
                            </p>

                            <Button onClick={() => navigate("")}>
                                <span>learn more</span>
                                <FaChevronRight />
                            </Button>
                        </div> */}

                        {/* 
                        <div className="box">
                            <FaAmbulance />
                            <h3>24/7 ambulance</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Ad, omnis.
                            </p>
                            <a href="#" className="btn">
                                <span>learn more</span>
                                <FaChevronRight />
                            </a>
                        </div>

                        <div className="box">
                            <FaUserMd />
                            <h3>expert doctors</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Ad, omnis.
                            </p>
                            <a href="#" className="btn">
                                <span>learn more</span>
                                <FaChevronRight />
                            </a>
                        </div>

                        <div className="box">
                            <FaPills />
                            <h3>medicines</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Ad, omnis.
                            </p>
                            <a href="#" className="btn">
                                <span>learn more</span>
                                <FaChevronRight />
                            </a>
                        </div>

                        <div className="box">
                            <FaProcedures />
                            <h3>bed facility</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Ad, omnis.
                            </p>
                            <a href="#" className="btn">
                                <span>learn more</span>
                                <FaChevronRight />
                            </a>
                        </div>

                        <div className="box">
                            <FaHeartbeat />
                            <h3>total care</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Ad, omnis.
                            </p>

                            <a href="#" className="btn">
                                <span>learn more</span>
                                <FaChevronRight />
                            </a>
                        </div> 
                        */}
                    </div>
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default ServicesCom;
