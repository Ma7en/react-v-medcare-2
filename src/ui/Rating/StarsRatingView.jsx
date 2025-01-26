/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import Star from "./Star";

const containerStyle = {
    // display: "flex",
    // alignItems: "center",
    // gap: "16px",
};

function StarsRatingView({ starrating }) {
    // const [userRating, setUserRating] = useState("");
    const maxRating = 5;
    const size = 14;
    // const color = "#fcc419";
    const color = "#fff";
    const defaultRating = 0;
    const [rating, setRating] = useState(defaultRating);
    const [tempRating, setTempRating] = useState(starrating);

    return (
        <>
            <div style={containerStyle}>
                {Array.from({ length: maxRating }, (_, i) => (
                    <Star
                        key={i}
                        // full={tempRating}
                        full={
                            tempRating ? tempRating >= i + 1 : rating >= i + 1
                        }
                        color={color}
                        size={size}
                    />
                ))}
            </div>
        </>
    );
}

export default StarsRatingView;
