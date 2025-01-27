import styled, { css } from "styled-components";

const Form = styled.form`
    width: 100%;
    max-width: 48rem;
    /* box-shadow: var(--shadow-lg); */
    box-shadow: var(--box-shadow);

    ${(props) =>
        props.type === "regular" &&
        css`
            padding: 2.4rem 4rem;

            /* Box */
            background-color: var(--back-box);
            border: var(--border);
            /* border: 1px solid var(--color-grey-100); */
            border-radius: var(--border-radius-md);
        `}

    ${(props) =>
        props.type === "modal" &&
        css`
            /* width: 80rem; */
            width: 100%;
            max-width: 100%;
            padding: 2rem 2rem;
        `}

    ${(props) =>
        props.type === "updata" &&
        css`
            max-width: 100%;
            padding: 2rem 2rem;
            background-color: var(--color-grey-0);
            border: 1px solid var(--color-grey-100);
            border-radius: var(--border-radius-md);
        `}
    
    overflow: hidden;
    font-size: 1.4rem;

    background-color: var(--back-box);
    border: var(--border);
    border-radius: var(--border-radius-md);

    @media (max-width: 768px) {
        padding-inline: 2rem;
        max-width: 100%;
    }

    > div:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }
`;

Form.defaultProps = {
    type: "regular",
};

export default Form;
