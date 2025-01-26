/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPinterestP,
    FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// ui
import Heading from "../global/Heading";
// import IconCom from "../icons/IconCom";

// assets
import doctorimage from "../../assets/images/doctors/doc-1.jpg";
import imagenotfound from "../../assets/images/error/doctor-woman-400px-2-.png";

function DoctorCom({ doctor }) {
    const { id, image, name, experience, social } = doctor;

    return (
        <>
            <div className="box">
                <img src={doctorimage || imagenotfound} alt={`doctor${id}`} />

                <Heading as="h5">{name}</Heading>

                <span>{experience}</span>

                <div className="share">
                    {social?.map((soc) => (
                        <Link
                            to={`${soc.link}`}
                            target="_blank"
                            key={soc.id}
                            className={`${!soc.link && "none"}`}
                        >
                            {/* <FaFacebookF /> */}
                            {/* <IconCom name={soc.name} /> */}
                            {soc.name === "facebook" && <FaFacebookF />}

                            {soc.name === "twitter" && <FaTwitter />}

                            {soc.name === "instagram" && <FaInstagram />}

                            {soc.name === "linkedin" && <FaLinkedinIn />}

                            {soc.name === "pinterest" && <FaPinterestP />}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default DoctorCom;
