import styled from "styled-components";

const StyledOr = styled.span`
    width: fit-content;
    width: 3rem;
    height: 3rem;
    background-color: var(--green);
    /* border-radius: var(--border-radius-sm); */
    border-radius: 50%;
    border: var(--border);
    text-transform: capitalize;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
function Or() {
    return (
        <>
            <StyledOr>Or</StyledOr>
        </>
    );
}

export default Or;
