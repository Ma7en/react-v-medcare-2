import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
    HiArrowPath,
    HiBriefcase,
    HiChartBar,
    HiChatBubbleLeftEllipsis,
    HiCube,
    HiMiniBookOpen,
    HiOutlineHome,
} from "react-icons/hi2";
import { FaAmbulance, FaNotesMedical, FaUserMd } from "react-icons/fa";

import { App_Url } from "../../utils/constants";
import { useAppMenu } from "../../contexts/AppMenuContext";

const StyledNav = styled.nav`
    ul {
        ul {
            padding-left: 2rem;
        }
    }
`;

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

// const Link = styled.a`
const StyledNavLink = styled(NavLink)`
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        color: var(--color-grey-600);
        font-size: 1.6rem;
        font-weight: 500;
        padding: 1.2rem 2.4rem;
        padding-left: 0.4rem;
        transition: all 0.3s;

        border: var(--border);
        border-color: transparent;
    }

    /* This works because react-router places the active class on the active NavLink */
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        /* color: var(--color-grey-800); */
        color: var(--green);
        background-color: var(--color-grey-50);
        border-radius: var(--border-radius-sm);

        background-color: var(--back-box);
        border: var(--border);
        border-radius: var(--border-radius-md);
        box-shadow: var(--box-shadow);
    }
    &.com {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        div {
            display: flex;
            align-items: center;
            gap: 1.2rem;
        }
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        color: var(--color-grey-400);
        transition: all 0.3s;
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
        color: var(--color-brand-600);
    }
`;

const NavListChild = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

function AppMainNav() {
    const { setNavMenu } = useAppMenu();

    return (
        <>
            <StyledNav>
                <NavList>
                    <li>
                        <StyledNavLink
                            to={`${App_Url}/home`}
                            onClick={() => setNavMenu(false)}
                        >
                            <HiOutlineHome />
                            <span>Home</span>
                        </StyledNavLink>
                    </li>

                    <li>
                        <StyledNavLink
                            to={`${App_Url}/services`}
                            onClick={() => setNavMenu(false)}
                        >
                            <FaAmbulance />
                            <span>services</span>
                        </StyledNavLink>
                    </li>

                    <li>
                        <StyledNavLink
                            to={`${App_Url}/book`}
                            onClick={() => setNavMenu(false)}
                        >
                            <FaNotesMedical />
                            <span>book</span>
                        </StyledNavLink>
                    </li>

                    <li>
                        <StyledNavLink
                            to={`${App_Url}/blogs`}
                            onClick={() => setNavMenu(false)}
                        >
                            <HiMiniBookOpen />
                            <span>Blogs</span>
                        </StyledNavLink>
                    </li>

                    <li>
                        <StyledNavLink
                            to={`${App_Url}/components`}
                            className={`com`}
                            onClick={() => setNavMenu(false)}
                        >
                            <div>
                                <HiCube />
                                <span>components</span>
                            </div>

                            <NavListChild>
                                <li>
                                    <StyledNavLink
                                        to={`${App_Url}/landing`}
                                        onClick={() => setNavMenu(false)}
                                    >
                                        <HiArrowPath />
                                        <span>Landing</span>
                                    </StyledNavLink>
                                </li>

                                <li>
                                    <StyledNavLink
                                        to={`${App_Url}/iconsnumber`}
                                        onClick={() => setNavMenu(false)}
                                    >
                                        <HiChartBar />
                                        <span>iconsNumber</span>
                                    </StyledNavLink>
                                </li>

                                <li>
                                    <StyledNavLink
                                        to={`${App_Url}/aboutus`}
                                        onClick={() => setNavMenu(false)}
                                    >
                                        <HiBriefcase />
                                        <span>aboutus</span>
                                    </StyledNavLink>
                                </li>

                                <li>
                                    <StyledNavLink
                                        to={`${App_Url}/doctors`}
                                        onClick={() => setNavMenu(false)}
                                    >
                                        <FaUserMd />
                                        <span>doctors</span>
                                    </StyledNavLink>
                                </li>

                                <li>
                                    <StyledNavLink
                                        to={`${App_Url}/reviews`}
                                        onClick={() => setNavMenu(false)}
                                    >
                                        <HiChatBubbleLeftEllipsis />
                                        <span>reviews</span>
                                    </StyledNavLink>
                                </li>
                            </NavListChild>
                        </StyledNavLink>
                    </li>
                </NavList>
            </StyledNav>
        </>
    );
}

export default AppMainNav;
