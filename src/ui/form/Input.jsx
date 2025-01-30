import styled from "styled-components";

const Input = styled.input`
    /* caret-color: var(--color-brand-600); */
    caret-color: var(--green);
    /* border: 1px solid var(--color-grey-300); */
    border: var(--border);
    /* background-color: var(--color-grey-0); */
    background-color: var(--back-sec-2);
    color: var(--black);
    border-radius: var(--border-radius-sm);
    padding: 0.8rem 1.2rem;
    box-shadow: var(--shadow-sm);
    text-transform: none;
    font-size: 2rem;

    width: 100%;

    &:focus,
    &:active,
    &:hover,
    &:visited,
    &:internal-autofill-selected {
        background-color: var(--back-sec-2);
    }
`;
export default Input;
