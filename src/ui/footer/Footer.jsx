// style
import "./Footer.scss";

function Footer() {
    return (
        <>
            <section className="footer">
                <div className="waves">
                    <div className="wave" id="wave1" />
                    <div className="wave" id="wave2" />
                    <div className="wave" id="wave3" />
                    <div className="wave" id="wave4" />
                </div>

                <div className="container">
                    <div className="credit">
                        created by
                        <a> mr. mazen saad ({new Date().getFullYear()})</a> all
                        rights reserved
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
