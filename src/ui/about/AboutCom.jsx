/* eslint-disable no-unused-vars */
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

// style
import "./AboutCom.scss";

//
// import { useAboutUs } from "../../features/aboutus/useAboutUs";

// utils
import { aboutus as aboutusVar } from "../../utils/vars";

// data
import { aboutus } from "../../data/variablesdata";

// ui
import Heading from "../global/Heading";
import Spinner from "../spinner/Spinner";
import Picture from "../pictures/Picture";
import Empty from "../error/Empty";

// assets
import aboutimage from "../../assets/images/about/about-img.svg";

function AboutCom() {
    const { title, summary } = aboutusVar;
    // const { isLoading, aboutus } = useAboutUs();
    // const { isLoading, aboutus } = useState({});

    // console.log(`a`, aboutus[0].image);

    // if (isLoading) return <Spinner />;
    if (!aboutus) return <Empty resourceName="aboutus" />;

    return (
        <>
            <section className="about" id="about">
                <div className="waves">
                    <div className="wave" id="wave1" />
                    <div className="wave" id="wave2" />
                    <div className="wave" id="wave3" />
                    <div className="wave" id="wave4" />
                </div>

                <div className="container">
                    <Heading as="h2">
                        <span>about</span>
                        us
                    </Heading>

                    <div className="row">
                        <Picture
                            src={aboutimage}
                            alt={`We Take Care Of Your Healthy Life`}
                            caption={`We Take Care Of Your Healthy Life`}
                        />

                        <div className="content">
                            <Heading as="h3">
                                We Take Care Of Your Healthy Life
                            </Heading>

                            <p>
                                Lorem Ipsum Dolor Sit Amet Consectetur,
                                Adipisicing Elit. Iure Ducimus, Quod Ex
                                Cupiditate Ullam In Assumenda Maiores Et Culpa
                                Odit Tempora Ipsam Qui, Quisquam Quis Facere
                                Iste Fuga, Minus Nesciunt. Lorem Ipsum Dolor,
                                Sit Amet Consectetur Adipisicing Elit. Natus
                                Vero Ipsam Laborum Porro Voluptates Voluptatibus
                                A Nihil Temporibus Deserunt Vel?
                            </p>

                            <Link to="/aboutus" className="btn">
                                <span>learn more</span>
                                <FaChevronRight />
                            </Link>
                        </div>
                    </div>

                    {/* {aboutus?.length > 0 &&
                        aboutus?.map((about, index) => (
                            <div className="row" key={index}>
                                <Picture
                                    src={aboutimage}
                                    alt={about?.image?.alt}
                                    caption={about?.image?.caption}
                                />

                                <div className="content">
                                    <Heading as="h3">
                                        {about?.title || title}
                                    </Heading>
                                    <p>{about?.summary || summary}</p>

                                    <Link to="/aboutus" className="btn">
                                        <span>learn more</span>
                                        <FaChevronRight />
                                    </Link>
                                </div>
                            </div>
                        ))} */}

                    {/* <div className="row">
                        <div className="image">
                            <img
                                src="images/about/about-img.svg"
                                alt="aboutus image"
                            />
                        </div>

                        <div className="content">
                            <Heading as="h3">{title}</Heading>
                            <p>{summary}</p>

                            <Link to="/aboutus" className="btn">
                                <span>learn more</span>
                                <FaChevronRight />
                            </Link>
                        </div>
                    </div> */}
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default AboutCom;
