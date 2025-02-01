import styled from "styled-components";

const SelectForm = styled.select`
    font-size: 1.4rem;
    padding: 0.8rem 1.2rem;
    color: var(--black);
    /* border: 1px solid
        ${(props) =>
        props.type === "white"
            ? "var(--color-grey-100)"
            : "var(--color-grey-300)"}; */
    /* background-color: var(--color-grey-0); */
    background-color: var(--back-box);
    font-weight: 500;
    /* box-shadow: var(--shadow-sm); */
    box-shadow: var(--box-shadow);
    border: var(--border);
    border-radius: var(--border-radius-sm);

    outline: none;
    &:focus {
        outline: none;
    }

    &:active,
    &:hover,
    &::slotted {
        border: var(--border);
    }
`;
export default SelectForm;
