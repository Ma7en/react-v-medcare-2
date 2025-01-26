/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPinterestP,
    FaTwitter,
} from "react-icons/fa";

function SocialIcon({ name }) {
    console.log(`name:- `, name);
    return (
        <>
            {name === "facebook" && <FaFacebookF />}

            {name === "twitter" && <FaTwitter />}

            {name === "instagram" && <FaInstagram />}

            {name === "linkedin" && <FaLinkedinIn />}

            {name === "pinterest" && <FaPinterestP />}
        </>
    );
}

export default SocialIcon;
