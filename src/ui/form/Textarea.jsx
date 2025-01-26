import styled from "styled-components";

const Textarea = styled.textarea`
    padding: 0.8rem 1.2rem;
    /* border: 1px solid var(--color-grey-300); */
    /* border-radius: 5px; */
    /* background-color: var(--color-grey-0); */
    /* box-shadow: var(--shadow-sm); */
    width: 100%;
    min-height: 20rem;

    background-color: var(--back-sec-2);
    border-radius: var(--border-radius-sm);
    color: var(--black);
    border: var(--border);
    caret-color: var(--green);
    box-shadow: var(--shadow-sm);

    &:focus,
    &:active,
    &:hover,
    &:visited,
    &:internal-autofill-selected {
        background-color: var(--back-sec-2);
    }
`;

export default Textarea;
