/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useService } from "../../features/services/useService";
import Empty from "../error/Empty";
import Heading from "../global/Heading";
import Picture from "../pictures/Picture";
import Spinner from "../spinner/Spinner";
import Video from "../videos/Video";
import { FaChevronRight } from "react-icons/fa";

function ServiceComView() {
    const { isLoading, service } = useService();

    if (isLoading) return <Spinner />;
    if (!service) return <Empty resourceName="service" />;

    const {
        id,
        created_at,
        dataupdate,
        icon,
        image,
        video,
        title,
        summary,
        description,
        email,
        user_id,
    } = service;

    if (isLoading) return <Spinner />;
    return (
        <>
            <div className="aboutviewcom">
                <div className="container">
                    <section>
                        {image.url ? (
                            <Picture
                                src={
                                    image.url ||
                                    image.src ||
                                    "images/about/about-img.svg"
                                }
                                alt={image.alt}
                                caption={image.caption}
                            />
                        ) : (
                            <Video
                                // src={`${about.video.src || about.video.url || "/vidoes/neurorons.mp4" || video}`}
                                src={`${"/vidoes/neurorons.mp4" || video}`}
                            />
                        )}

                        <div className="content">
                            <Heading as="h3">{title}</Heading>

                            <p>{summary}</p>

                            <div className="list">
                                <ul>
                                    {Object.keys(description).map((des) => (
                                        <li key={des}>{description[des]}</li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/book" className="btn">
                                <span>book new</span>
                                <FaChevronRight />
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default ServiceComView;
