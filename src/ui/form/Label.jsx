import styled, { css } from "styled-components";

const Label = styled.label`
    ${(props) =>
        props.type === "1" &&
        css`
            font-size: 2rem;
            font-weight: 600;
            color: var(--green);
        `}
    ${(props) =>
        props.type === "2" &&
        css`
            font-size: 1.6rem;
            font-weight: 600;
        `}
    ${(props) =>
        props.type === "3" &&
        css`
            font-size: 1.4rem;
            font-weight: 400;
            padding-left: 15px;
            /* start max 767px */
            @media (max-width: 767px) {
                padding: 0;
            }
        `}
`;
export default Label;
