/* eslint-disable no-unused-vars */
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaPinterestP,
} from "react-icons/fa";

// utils

// commponents
import Heading from "../global/Heading";
import DoctorCom from "./DoctorCom";
import { doctors } from "../../data/variablesdata";

function DoctorsCom() {
    return (
        <>
            <section className="doctors" id="doctors">
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
