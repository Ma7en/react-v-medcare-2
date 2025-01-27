/* eslint-disable no-unused-vars */
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaPinterestP,
} from "react-icons/fa";

// style
import "./DoctorsCom.scss";

// data
import { doctors } from "../../data/variablesdata";

// commponents
import DoctorCom from "./DoctorCom";
import Heading from "../global/Heading";

function DoctorsCom() {
    return (
        <>
            <section className="doctors" id="doctors">
                <div className="waves">
                    <div className="wave" id="wave1" />
                    <div className="wave" id="wave2" />
                    <div className="wave" id="wave3" />
                    <div className="wave" id="wave4" />
                </div>

                <div className="container">
                    <Heading as="h2">
                        our
                        <span>doctors</span>
                    </Heading>

                    <div className="box-container">
                        {doctors?.length > 0 &&
                            doctors?.map((doctor, index) => (
                                <DoctorCom doctor={doctor} key={index} />
                            ))}

                        {/* <div className="box">
                            <img src="images/doctors/doc-1.jpg" alt="doctor1" />
                            <h3>john deo</h3>
                            <span>expert doctor</span>
                            <div className="share">
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

                                
                            </div>
                        </div> */}

                        {/* 
                        <div className="box">
                            <img src="images/doctors/doc-2.jpg" alt="doctor2" />
                            <h3>john deo</h3>
                            <span>expert doctor</span>
                            <div className="share">
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
                            </div>
                        </div>

                        <div className="box">
                            <img src="images/doctors/doc-3.jpg" alt="doctor3" />
                            <h3>john deo</h3>
                            <span>expert doctor</span>
                            <div className="share">
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
 
                            </div>
                        </div>

                        <div className="box">
                            <img src="images/doctors/doc-4.jpg" alt="doctor4" />
                            <h3>john deo</h3>
                            <span>expert doctor</span>
                            <div className="share">
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

                                 
                            </div>
                        </div>

                        <div className="box">
                            <img src="images/doctors/doc-5.jpg" alt="doctor5" />
                            <h3>john deo</h3>
                            <span>expert doctor</span>
                            <div className="share">
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

                                
                            </div>
                        </div>

                        <div className="box">
                            <img src="images/doctors/doc-6.jpg" alt="doctor6" />
                            <h3>john deo</h3>
                            <span>expert doctor</span>
                            <div className="share">
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

                                
                            </div>
                        </div> 
                        */}
                    </div>
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default DoctorsCom;
