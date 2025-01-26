import Video from "../videos/Video";

function BookReview() {
    return (
        <>
            <div className="bookreview">
                <div className="container">
                    <section>
                        <Video src="/vidoes/neurorons.mp4" />

                        <form action="#">
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
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
}

export default BookReview;
