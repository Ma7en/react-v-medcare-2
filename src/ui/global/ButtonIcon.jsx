import styled from "styled-components";

const ButtonIcon = styled.button`
    background: none;
    border: none;
    padding: 0.6rem;
    border-radius: var(--border-radius-sm);
    transition: var(--main-transition);
    border: var(--border);
    border-color: transparent;
    /* background-color: var(--back-box); */
    color: var(--black);

    &:hover {
        /* background-color: var(--color-grey-100); */
        background-color: var(--back-box);
        box-shadow: var(--box-shadow);
        border-color: var(--green);
    }

    & svg {
        /* width: 2.2rem;
        height: 2.2rem; */
        font-size: 2rem;
        color: var(--black);
    }
`;

export default ButtonIcon;
