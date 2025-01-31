/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";

const sizes = {
    small: css`
        font-size: 1.2rem;
        padding: 0.4rem 0.8rem;
        text-transform: uppercase;
        font-weight: 600;
        text-align: center;
    `,
    // medium: css`
    //     font-size: 1.4rem;
    //     padding: 1.2rem 1.6rem;
    //     font-weight: 500;
    // `,
    medium: css`
        font-size: 1.7rem;
        font-weight: 500;
        padding: 0.5rem;
        padding-left: 1rem;
        text-transform: capitalize;
    `,
    large: css`
        font-size: 1.6rem;
        padding: 1.2rem 2.4rem;
        font-weight: 500;
    `,
};

const variations = {
    primary: css`
        background: var(--back-sec-2);
        color: var(--black);

        font-weight: 500;
        transition: var(--main-transition);

        &:hover,
        &:active,
        &.active:link,
        &.active:visited {
            background-color: var(--green);
            color: var(--white);
            border-color: transparent;
            transition: var(--main-transition);
        }
    `,
    secondary: css`
        color: var(--color-grey-600);
        background: var(--color-grey-0);
        border: 1px solid var(--color-grey-200);
        transition: var(--main-transition);

        &:hover,
        &:active,
        &.active:link,
        &.active:visited {
            background-color: var(--color-grey-50);
            transition: var(--main-transition);
        }
    `,
    danger: css`
        color: var(--color-red-100);
        background-color: var(--color-red-700);
        transition: var(--main-transition);

        &:hover,
        &:active,
        &.active:link,
        &.active:visited {
            background-color: var(--color-red-800);
            transition: var(--main-transition);
        }
    `,
};

const Button = styled.button`
    padding-block: 10px !important;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    border: var(--border);
    border-radius: var(--border-radius-sm);

    box-shadow: var(--box-shadow);
    cursor: pointer;

    transition: var(--main-transition);

    svg {
        font-size: 2.5rem;
        padding: 0.2rem 0.4rem;
        border-radius: 0.5rem;
        background: var(--green);
        color: var(--white);
        margin-left: 1rem;
        transition: var(--main-transition);
        -webkit-transition: var(--main-transition);
    }

    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        background: var(--green);
        /* color: var(--white); */
        transition: var(--main-transition);
        svg {
            transition: var(--main-transition);
            color: var(--green);
            background: var(--white);
            margin-left: 1.5rem;
        }
    }

    ${(props) => sizes[props?.size]}
    ${(props) => variations[props?.variation]}
`;

Button.defaultProps = {
    variation: "primary",
    size: "medium",
};

export default Button;
