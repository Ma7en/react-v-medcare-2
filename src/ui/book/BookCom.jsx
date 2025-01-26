// assets
import bookimage from "../../assets/images/book/book-img.svg";

function BookCom() {
    return (
        <>
            <section className="book" id="book">
                <div className="container">
                    <h1 className="heading">
                        <span>book</span>
                        now
                    </h1>

                    <div className="row">
                        <div className="image">
                            <img src={bookimage} alt={`book img`} />
                        </div>

                        <form action="#">
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
                        </form>
                    </div>
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default BookCom;
