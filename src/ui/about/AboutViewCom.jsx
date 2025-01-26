/* eslint-disable no-unused-vars */
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

import Heading from "../global/Heading";
import Spinner from "../spinner/Spinner";
import Video from "../videos/Video";
import Picture from "../pictures/Picture";
import { aboutus } from "../../data/variablesdata";

// import { aboutus as aboutusVar } from "../../utils/vars";
// import { useAboutUs } from "../../features/aboutus/useAboutUs";

// assets
import aboutvideo from "../../assets/vidoes/neurorons.mp4";

function AboutViewCom() {
    // const { id, image, video, title, summary, description } = aboutus;
    // const { isLoading, aboutus } = useAboutUs();
    // const { isLoading, aboutus } = useState();

    // console.log(`img==>`, image);

    // if (isLoading) return <Spinner />;
    return (
        <>
            <div className="aboutviewcom">
                <div className="container">
                    {aboutus.length > 0 &&
                        aboutus?.map((about, index) => (
                            <section key={index}>
                                {about?.video ? (
                                    <Video
                                        // src={`${about.video.src || about.video.url || "/vidoes/neurorons.mp4" || video}`}
                                        src={`${aboutvideo}`}
                                    />
                                ) : (
                                    <Picture
                                        src={
                                            about?.image.src ||
                                            about?.image.url ||
                                            "images/about/about-img.svg"
                                        }
                                        alt={about?.image.alt}
                                        caption={about?.image.caption}
                                    />
                                )}

                                <div className="content">
                                    <Heading as="h3">{about?.title}</Heading>

                                    <p>{about?.summary}</p>

                                    <div className="list">
                                        <ul>
                                            {/* {about.description.map((dis) => (
                                            <li key={dis.id}>{dis.line}</li>
                                        ))} */}
                                            {/* {Object.keys(
                                                about?.description
                                            ).map((des) => (
                                                <li key={des}>
                                                    {about?.description[des]}
                                                </li>
                                            ))} */}
                                            {/* {Object.keys(description).forEach(
                                            (des) => {
                                                // setValue(`description.${des}`, description[des])
                                                <li key={des}>
                                                    {description[des]}dddd
                                                </li>;
                                            },
                                        )} */}
                                        </ul>
                                    </div>

                                    <Link to="/book" className="btn">
                                        <span>book new</span>
                                        <FaChevronRight />
                                    </Link>
                                </div>
                            </section>
                        ))}
                </div>
            </div>
        </>
    );
}

export default AboutViewCom;
