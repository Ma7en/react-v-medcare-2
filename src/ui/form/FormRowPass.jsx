/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import Label from "./Label";

const StyledFormRow = styled.div`
    /* display: flex;
    flex-direction: column; */
    display: grid;
    /* grid-template-columns: 1fr; */
    /* grid-template-columns: 24rem 1fr 1.2fr; */
    /* grid-template-columns: ${(props) =>
        props.sign === "true" ? "1fr" : "24rem 1fr 1.2fr"}; */

    ${(props) =>
        props.sign === "true" &&
        css`
            grid-template-columns: 1fr;
            /* gap: 0.8rem; */
            gap: 1.4rem;
            justify-items: stretch;
            align-items: stretch;
        `}
    ${(props) =>
        props.sign === "false" &&
        css`
            grid-template-columns: 24rem 1fr 1.2fr;
            gap: 1.4rem;
            align-items: center;
            padding: 1.2rem 0;
        `}

    

    /* gap: 0.8rem; */
    /* gap: 2.4rem; */
    /* gap: ${(props) => (props.sign === true ? " 0.8rem" : "2.4rem")}; */
    padding: 1.2rem 0;
`;

// const Label = styled.label`
//     font-weight: 500;
//     /* font-size: 1.6rem;
//     color: var(--green); */
//     /* font-size: 2rem;
//     color: var(--green); */
// `;

const Error = styled.span`
    font-size: 1.4rem;
    color: var(--color-red-700);
`;

const Div = styled.div`
    position: relative;

    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    gap: 1.4rem;

    input {
        width: 100%;
    }
    svg {
        position: absolute;
        cursor: pointer;
        right: 13px;
        top: 50%;
        font-size: 2rem;
        transform: translateY(-50%);
    }
`;

function FormRowPass({ sign, label, error, children }) {
    return (
        <>
            <StyledFormRow sign={sign}>
                {label && (
                    <Label
                        type="1"
                        htmlFor={children?.props?.id || children[0]?.props?.id}
                    >
                        {label}
                    </Label>
                )}
                <Div>{children}</Div>
                {error && <Error>{error}</Error>}
            </StyledFormRow>
        </>
    );
}

export default FormRowPass;
