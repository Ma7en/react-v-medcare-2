// ui
import Video from "../videos/Video";
import BookForm from "./BookForm";
import Heading from "../global/Heading";

// assets
import bookvideo from "../../assets/vidoes/neurorons.mp4";

function BookReview() {
    return (
        <>
            <div className="book">
                <div className="container" data-aos="fade-up">
                    <section>
                        <Heading as="h3">book appointment</Heading>

                        <Video src={bookvideo} />

                        <BookForm />

                        {/* <form action="#">
                            <h3>book appointment</h3>
                            <input
                                type="text"
                                placeholder="your name"
                                className="box"
                                required
                            />
                            <input
                                type="number"
                                placeholder="your number"
                                className="box"
                                required
                            />
                            <input
                                type="email"
                                placeholder="your email"
                                className="box"
                            />
                            <input type="date" className="box" />
                            <textarea
                                name=""
                                id=""
                                // cols="30"
                                // rows="10"
                                className="box"
                                placeholder="Your subject"
                            />
                            <input
                                type="submit"
                                defaultValue="book now"
                                className="btn"
                            />
                        </form> */}
                    </section>
                </div>
            </div>
        </>
    );
}

export default BookReview;
