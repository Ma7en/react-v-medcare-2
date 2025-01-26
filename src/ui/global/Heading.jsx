import styled, { css } from "styled-components";

// const test = css`
//     text-align: center;
//     ${10 > 5 && "background-color: yellow;"}
// `;

const Heading = styled.h1`
    ${(props) =>
        props.as === "h1" &&
        css`
            font-size: 3rem;
            font-weight: 600;
        `}

    ${(props) =>
        props.as === "h2" &&
        css`
            /* font-size: 2rem;
            font-weight: 600; */
            cursor: default;
            text-align: center;
            padding-bottom: 2rem;
            text-shadow: var(--text-shadow);
            text-transform: uppercase;
            color: var(--black);
            font-size: 5rem;
            font-weight: 600;
            letter-spacing: 0.4rem;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            span {
                text-transform: uppercase;
                color: var(--green);
            }
        `}
        
    ${(props) =>
        props.as === "h3" &&
        css`
            /* font-size: 2rem;
            font-weight: 500; */
            font-size: 4.5rem;
            color: var(--black);
            line-height: 1.8;
            text-shadow: var(--text-shadow);
        `}
    
    ${(props) =>
        props.as === "h4" &&
        css`
            /* font-size: 3rem;
            font-weight: 600;
            text-align: center; */
            /* padding-bottom: 1rem; */
            color: var(--black);
            font-size: 3rem;
        `}
    
    ${(props) =>
        props.as === "h5" &&
        css`
            /* padding: 1rem 0; */
            color: var(--black);
            font-size: 2.5rem;
        `} /* line-height: 1.4; */

    ${(props) =>
        props.as === "h6" &&
        css`
            /* padding: 1rem 0; */
            color: var(--black);
            font-size: 2rem;
        `} /* line-height: 1.4; */
`;
export default Heading;
