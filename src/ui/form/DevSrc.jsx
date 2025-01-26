/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledDevSrc = styled.div`
    /* display: flex; */
    display: grid;
    /* grid-template-columns: 20rem 1fr; */
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    /* grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr)); */
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    width: 100%;
    /* gap: 3rem; */
    /* justify-content: space-between; */

    /* start max 767px */
    @media (max-width: 767px) {
        padding-left: 1.5rem;
    }
    label {
        font-size: 1.4rem;
        font-weight: 400;
    }
    /* input {
        width: 100%;
    } */
`;

function DevSrc({ children }) {
    return (
        <>
            <StyledDevSrc>{children}</StyledDevSrc>
        </>
    );
}

export default DevSrc;
