// style
import "./ContactPage.scss";

// components
import ContactForm from "./ContactForm";

// ui
import Heading from "../../../ui/global/Heading";
import Main from "../../../ui/global/Main";

function ContactPage() {
    return (
        <>
            <Main type="loginpage" className="loginpage">
                <div className="contactpage">
                    <div className="container">
                        <section>
                            <Heading as="h3">Contact</Heading>

                            <ContactForm sign={true} />
                        </section>

                        {/* <section>
                            <form action="#">
                                <h3>Contact</h3>
                                <input
                                    type="text"
                                    placeholder="your name"
                                    className="box"
                                    // autoComplete="off"
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="your Phone number"
                                    className="box"
                                    // autoComplete="off"
                                    required
                                />

                                <input
                                    type="email"
                                    placeholder="your email"
                                    className="box"
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
                        </section> */}
                    </div>
                </div>
            </Main>
        </>
    );
}

export default ContactPage;
