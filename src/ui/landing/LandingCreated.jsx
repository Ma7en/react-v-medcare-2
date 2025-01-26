/* eslint-disable react/prop-types */
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/helpers";

import { HiEye, HiMiniShare } from "react-icons/hi2";
import styled from "styled-components";

const StyledCreated = styled.div`
    background-color: var(--back-box);
    border: var(--border);
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius-md);
    /* text-align: center; */
    padding: 2rem;
    width: 100%;
    max-width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    .data {
        a {
            font-size: 1.4rem;
            color: var(--light-color);
            display: flex;
            align-items: center;
            gap: 0.4rem;
            cursor: default;
            &:hover:not(:first-child) {
                color: var(--green);
                cursor: pointer;
            }
            svg {
                // padding-right: 0.5rem;
                color: var(--green);
                font-size: 1.8rem;
            }
        }
    }

    ul {
        display: flex;
        align-items: center;
        gap: 1rem;
        li {
            /* a {
                background: none;
                border: none;
                padding: 0.6rem;
                border-radius: var(--border-radius-sm);
                transition: var(--main-transition);
                border: var(--border);
                border-color: transparent;
                &:hover {
                    background-color: var(--back-box);
                    box-shadow: var(--box-shadow);
                    border-color: var(--green);
                }
            } */
        }
    }
`;

const StyledLink = styled(Link)`
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        /* color: var(--color-grey-600); */
        /* font-size: 1.6rem; */
        font-weight: 500;
        padding: 0.6rem;
        /* padding: 1.2rem 2.4rem; */
        /* padding-left: 0.4rem; */
        transition: var(--main-transition);
        cursor: pointer;

        border-radius: var(--border-radius-sm);
        border: var(--border);
        border-color: transparent;
    }

    /* This works because react-router places the active class on the active NavLink */
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        /* color: var(--color-grey-800); */
        /* color: var(--green); */
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
        /* width: 2.4rem;
        height: 2.4rem; */
        /* color: var(--color-grey-400); */
        color: var(--black);
        transition: var(--main-transition);
        font-size: 2rem;
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
        color: var(--color-brand-600);
    }
`;

function LandingCreated({ dataupdate }) {
    // const navigate = useNavigate();

    const share = () => {
        let shareDate = {
            title: document.title,
            // url: document.location.href,
            url: `${document.location.origin}/home`,
        };
        if (navigator.canShare(shareDate)) {
            navigator.share(shareDate);
        }
    };

    return (
        <>
            <StyledCreated>
                <div className="data">
                    <a>
                        <FaCalendar />
                        <span>{formatDate(dataupdate)}</span>
                    </a>
                </div>

                <div>
                    <ul>
                        <li>
                            <StyledLink
                                to={`${document.location.origin}/home`}
                                target="_blank"
                            >
                                <HiEye />
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink onClick={() => share()}>
                                <HiMiniShare />
                            </StyledLink>
                        </li>

                        {/* <li>
                            <ButtonIcon onClick={() => navigate(`aboutus`)}>
                                <HiEye />
                            </ButtonIcon>
                        </li>
                        <li>
                            <ButtonIcon onClick={() => share()}>
                                <HiMiniShare />
                            </ButtonIcon>
                        </li> */}
                    </ul>
                </div>
            </StyledCreated>
        </>
    );
}

export default LandingCreated;
