/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaCalendar, FaChevronRight, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

// utils
import { formatDate } from "../../utils/helpers";

// assets
import imageblog from "../../assets/images/blogs/blog-1.jpg";
import imagenotfound from "../../assets/images/error/doctor-woman-400px-2-.png";

function BlogCom({ blog }) {
    const { id, image, data, adminname, adminid, title, summary } = blog;
    return (
        <>
            <div className="box" data-aos="flip-left">
                <div className="image">
                    <img
                        src={imageblog || imagenotfound}
                        alt={`blogs-${id}-${title}-${adminname}`}
                    />
                </div>

                <div className="content">
                    <div className="icon">
                        <a>
                            <FaCalendar />
                            {/* <span>1st may, 2021</span> */}
                            <span>{formatDate(data)}</span>
                        </a>

                        <Link to={`/admins/${adminid}`}>
                            <FaUser />
                            <span>{adminname}</span>
                        </Link>
                    </div>
                    <h3>{title}</h3>
                    <p>{summary}</p>
                    <Link to={`/blogs/${id}`} className="btn">
                        <span>learn more</span>
                        <FaChevronRight />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default BlogCom;
