/* eslint-disable react/prop-types */
import styled from "styled-components";
const StyledAddDesLine = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

const Add = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: var(--border);
    border-radius: var(--border-radius-sm);
    box-shadow: var(--box-shadow);
    cursor: pointer;
    text-transform: capitalize;
    color: var(--black);
    font-weight: 500;
    background: var(--back-sec-2);
    padding: 0.5rem;
    font-size: 1.2rem;
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

    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        background: var(--green);
        transition: var(--main-transition);
    }
`;

const Error = styled.span`
    font-size: 1.4rem;
    color: var(--color-red-700);
`;

function AddDesLine({ fn, error, text }) {
    return (
        <>
            <StyledAddDesLine>
                <Error>{error}</Error>
                <Add onClick={fn}>{text}</Add>
            </StyledAddDesLine>
        </>
    );
}

export default AddDesLine;
