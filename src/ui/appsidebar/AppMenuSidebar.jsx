// import { useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

// context
import { useAppMenuUser } from "../../contexts/AppMenuContextUser";

const StyledMenuFaBars = styled(FaBars)`
    font-size: 3.5rem;
    border-radius: 0.5rem;
    background: #eee;
    padding: 0.4rem 0.4rem;
    color: var(--green);
    cursor: pointer;
    display: none;
    z-index: 10;
    position: absolute;
    /* right: -5rem; */
    left: 2rem;

    top: 1.6rem;
    transition: var(--main-transition);
    -webkit-transition: var(--main-transition);
    -moz-transition: var(--main-transition);
    -ms-transition: var(--main-transition);
    -o-transition: var(--main-transition);
    @media (max-width: 767px) {
        // display: initial;
        display: flex;
        transition: var(--main-transition);
        &.bars {
            animation-name: bars;
            animation-duration: 0.5s;
            left: 2rem;
        }
        @keyframes bars {
            from {
                /* background-color: red; */
                left: 28rem;
            }
            to {
                left: 2rem;
                /* background-color: yellow; */
            }
        }
    }
`;
const StyledMenuFaTimes = styled(FaTimes)`
    font-size: 3.5rem;
    border-radius: 0.5rem;
    background: #eee;
    padding: 0.4rem 0.4rem;
    color: var(--green);
    cursor: pointer;
    display: none;
    z-index: 5;
    position: absolute;
    /* right: -5rem; */
    left: 2rem;
    top: 1.6rem;
    transition: var(--main-transition);
    -webkit-transition: var(--main-transition);
    -moz-transition: var(--main-transition);
    -ms-transition: var(--main-transition);
    -o-transition: var(--main-transition);

    @media (max-width: 767px) {
        // display: initial;
        display: flex;
        transition: var(--main-transition);

        &.times {
            animation-name: time;
            animation-duration: 0.5s;
            left: 28rem;

            &:hover {
                border-radius: 50%;
            }
        }

        @keyframes time {
            from {
                /* background-color: red; */
                left: 2rem;
            }
            to {
                /* background-color: yellow; */
                left: 28rem;
            }
        }
    }
`;

function AppMenuSidebar() {
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         setNavbar(false);
    //     });
    // }, [setNavbar]);

    const { navMenu, setNavMenu } = useAppMenuUser();

    return (
        <>
            {navMenu ? (
                <StyledMenuFaTimes
                    className="times"
                    // id="menu-btn"
                    onClick={() => {
                        setNavMenu(!navMenu);
                    }}
                />
            ) : (
                <StyledMenuFaBars
                    // id="menu-btn"
                    className="bars"
                    onClick={() => {
                        setNavMenu(!navMenu);
                    }}
                />
            )}
        </>
    );
}

export default AppMenuSidebar;
