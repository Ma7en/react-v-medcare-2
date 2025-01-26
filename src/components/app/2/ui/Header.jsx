function Header() {
    return (
        <>
            <header
                className="navbar navbar-expand-lg fixed-top navbar-custom sticky-dark"
                id="navbar-sticky"
            >
                <div className="container">
                    <a
                        className="logo text-uppercase"
                        href="#home"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 10,
                            alignItems: "center",
                        }}
                    >
                        <img
                            alt
                            // src="https://arabyai-webpages.s3.me-south-1.amazonaws.com/template_website/araby_ai_template/images/logo-dark.png"
                            src="/images2/logo-dark.png"
                            width="50px"
                        />
                    </a>

                    <button
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-bs-target="#navbarCollapse"
                        data-bs-toggle="collapse"
                        type="button"
                    >
                        <i className="mdi mdi-menu" />
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarCollapse"
                    >
                        <ul
                            className="navbar-nav ms-auto navbar-center"
                            id="mySidenav"
                        >
                            <li className="nav-item">
                                <a className="nav-link" href="#home">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#features">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testimonial">
                                    Testimonial
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
