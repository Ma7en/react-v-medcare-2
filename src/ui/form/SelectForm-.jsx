/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledSelect = styled.select`
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

function SelectForm({ options, value, onChange, ...props }) {
    console.log(`e`, options);
    return (
        <>
            <select name="" id="">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            {/* <StyledSelect value={value} onChange={onChange} {...props}>
                {options?.map((option, index) => (
                    <option key={index} value={option?.value}>
                        {option?.label}
                    </option>
                ))}
            </StyledSelect> */}
        </>
    );
}

export default SelectForm;
