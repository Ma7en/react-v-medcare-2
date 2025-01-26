import PageNav from "../ui/header/PageNav";
import Main from "../ui/global/Main";
// import styles from "./Product.module.css";

export default function Product() {
    return (
        <>
            <PageNav />

            <Main type="productpage">
                <div className="container">
                    <section>
                        <div className="img">
                            <img
                                src="images/img-1.jpg"
                                alt="person with dog overlooking mountain with sunset"
                            />
                        </div>

                        <div>
                            <h2>About WorldWide.</h2>

                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illo est dicta illum vero
                                culpa cum quaerat architecto sapiente eius non
                                soluta, molestiae nihil laborum, placeat
                                debitis, laboriosam at fuga perspiciatis?
                            </p>

                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis doloribus libero sunt
                                expedita ratione iusto, magni, id sapiente sequi
                                officiis et.
                            </p>
                        </div>
                    </section>
                </div>
            </Main>
        </>
    );
}
