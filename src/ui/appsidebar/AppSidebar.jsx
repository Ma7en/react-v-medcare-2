/* eslint-disable no-unused-vars */
import styled from "styled-components";

// context
import { useAppMenuUser } from "../../contexts/AppMenuContextUser";

// ui
import AppMenuSidebar from "./AppMenuSidebar";

// ui
import AppMainNav from "./AppMainNav";
import Logo from "../header/Logo";

const StyledSidebar = styled.aside`
    background-color: var(--back-sec-2);
    padding: 3.2rem 1.4rem;
    border-right: 1px solid var(--color-grey-100);
    grid-row: 1/-1;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    position: relative;
    transition: var(--main-transition);

    scroll-behavior: smooth;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;
    }

    @media (max-width: 767px) {
        left: calc(-0% - 26rem);
        min-height: 100vh;
        position: absolute;
        z-index: 10;
        width: 26rem;
        /* transform: translateX(-30%); */
        /* width: 0px; */
        &.open {
            position: absolute;
            z-index: 10;
            left: calc(0% + 0rem);
            min-height: 100vh;
            transition: var(--main-transition);
        }
    }
`;

const StyledAppFooter = styled.footer`
    /* color: red; */
    padding: 3.2rem 0rem;
    span {
        color: var(--green);
    }
`;

function AppSidebar() {
    const { navMenu } = useAppMenuUser();

    return (
        <>
            <StyledSidebar className={`${navMenu && "open"}`}>
                {/* <AppMenuSidebar /> */}

                <Logo />
                <AppMainNav />

                <StyledAppFooter>
                    Created By
                    <span> mazen saad</span>
                </StyledAppFooter>

                {/* <Uploader /> */}
            </StyledSidebar>
        </>
    );
}

export default AppSidebar;
