/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import StarsRatingView from "../Rating/StarsRatingView";

// assets
import reviewimage from "../../assets/images/review/pic-1.png";
import imagenotfound from "../../assets/images/error/doctor-woman-400px-2-.png";

function ReviewCom({ review }) {
    const { id, image, name, starrating, description } = review;

    return (
        <>
            <div className="box">
                <img
                    src={reviewimage || imagenotfound}
                    alt={`review${id}-${name}`}
                />
                <h3>{name}</h3>
                <div className="stars">
                    <StarsRatingView starrating={starrating} />
                    {/* <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt /> */}
                </div>

                <p className="text">{description}</p>
            </div>
        </>
    );
}

export default ReviewCom;
