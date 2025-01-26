/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaBars, FaHeartbeat, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

// ui
import DarkModeToggle from "../themes/DarkModeToggle";
import Logo from "./Logo";

function Header() {
    const navigate = useNavigate();
    const [navbar, setNavbar] = useState(false);
    const [linksHeader, setLinksHeader] = useState([
        { id: 1, link: "/", title: "home" },
        { id: 2, link: "/aboutus", title: "about us" },
        { id: 3, link: "/book", title: "book" },
        { id: 4, link: "/blogs", title: "blogs" },
        { id: 5, link: "/contact", title: "contact" },
        { id: 6, link: "/login", title: "login" },
    ]);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setNavbar(false);
        });
    }, []);

    return (
        <>
            <header className="header">
                <div className="container">
                    <Logo />

                    <DarkModeToggle />

                    <nav className={`${navbar ? "navbar active" : "navbar"}`}>
                        <ul>
                            {linksHeader.length > 0 &&
                                linksHeader.map((link, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setNavbar(false);
                                        }}
                                    >
                                        <NavLink to={link?.link}>
                                            {link?.title}
                                        </NavLink>
                                    </li>
                                ))}
                        </ul>
                        {/* <ul>
                            <li>
                                <NavLink to="/">home</NavLink>
                            </li>

                            <li>
                                <NavLink to="/book">book</NavLink>
                            </li>

                            <li>
                                <NavLink to="/blogs">blogs</NavLink>
                            </li>

                            <li>
                                <NavLink to="/aboutus">about Us</NavLink>
                            </li>

                            <li>
                                <NavLink to="/contact">contact</NavLink>
                            </li>

                            <li>
                                <NavLink to="/login">login</NavLink>
                            </li>
                        </ul> */}
                    </nav>

                    {navbar ? (
                        <FaTimes
                            className="fa-times"
                            id="menu-btn"
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                        />
                    ) : (
                        <FaBars
                            id="menu-btn"
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                        />
                    )}

                    {/* <FaBars id="menu-btn" /> */}
                    {/* <i id="menu-btn" className="fas fa-bars" /> */}
                </div>
            </header>
        </>
    );
}

export default Header;
