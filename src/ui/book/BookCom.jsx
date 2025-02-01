// style
import "./BookCom.scss";

// assets
import bookimage from "../../assets/images/book/book-img.svg";
import BookForm from "./BookForm";

function BookCom() {
    return (
        <>
            <section className="book book-home" id="book">
                <div className="waves">
                    <div className="wave" id="wave1" />
                    <div className="wave" id="wave2" />
                    <div className="wave" id="wave3" />
                    <div className="wave" id="wave4" />
                </div>

                <div className="container" data-aos="fade-up">
                    <h1 className="heading">
                        <span>book</span>
                        now
                    </h1>

                    <div className="row">
                        <div className="image" data-aos="fade-left">
                            <img src={bookimage} alt={`book img`} />
                        </div>

                        <BookForm />

                        {/* <form action="#">
                            <h3>book appointment</h3>
                            <input
                                type="text"
                                id=""
                                className="box"
                                placeholder="your name"
                                // autoComplete="off"
                                required
                            />
                            <input
                                type="number"
                                id=""
                                className="box"
                                placeholder="your number"
                                // autoComplete="off"
                                required
                            />
                            <input
                                type="email"
                                id=""
                                className="box"
                                placeholder="your email"
                                // autoComplete="off"
                                required
                            />

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
                    </div>
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default BookCom;
