/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// style
import "./ReviewsCom.scss";

// data
import { reviews } from "../../data/variablesdata";

// components
import ReviewCom from "./ReviewCom";

// ui
import StarRating from "../Rating/StarRating";
import Star from "../Rating/Star";

/* eslint-disable react/no-unescaped-entities */
function ReviewsCom() {
    return (
        <>
            <section className="review" id="review">
                <div className="waves">
                    <div className="wave" id="wave1" />
                    <div className="wave" id="wave2" />
                    <div className="wave" id="wave3" />
                    <div className="wave" id="wave4" />
                </div>

                <div className="container" data-aos="fade-up">
                    <h1 className="heading">
                        client's
                        <span>review</span>
                    </h1>

                    <div className="box-container">
                        {reviews?.length > 0 &&
                            reviews?.map((review, index) => (
                                <ReviewCom review={review} key={index} />
                            ))}

                        {/* 
                        <div className="box">
                            <img src="images/review/pic-1.png" alt="review1" />
                            <h3>john deo</h3>
                            <div className="stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>

                            <p className="text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laboriosam sapiente nihil
                                aperiam? Repellat sequi nisi aliquid
                                perspiciatis libero nobis rem numquam nesciunt
                                alias sapiente minus voluptatem, reiciendis
                                consequuntur optio dolorem!
                            </p>
                        </div>

                        <div className="box">
                            <img src="images/review/pic-2.png" alt="review2" />
                            <h3>john deo</h3>
                            <div className="stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                            <p className="text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laboriosam sapiente nihil
                                aperiam? Repellat sequi nisi aliquid
                                perspiciatis libero nobis rem numquam nesciunt
                                alias sapiente minus voluptatem, reiciendis
                                consequuntur optio dolorem!
                            </p>
                        </div>

                        <div className="box">
                            <img src="images/review/pic-3.png" alt="review3" />
                            <h3>john deo</h3>
                            <div className="stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                            <p className="text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laboriosam sapiente nihil
                                aperiam? Repellat sequi nisi aliquid
                                perspiciatis libero nobis rem numquam nesciunt
                                alias sapiente minus voluptatem, reiciendis
                                consequuntur optio dolorem!
                            </p>
                        </div> 
                        */}
                    </div>
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default ReviewsCom;
