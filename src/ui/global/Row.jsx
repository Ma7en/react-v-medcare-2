import styled, { css } from "styled-components";

const Row = styled.div`
    display: flex;
    width: 100%;
    ${(props) =>
        props.type === "horizontal" &&
        css`
            justify-content: space-between;
            align-items: center;
        `}
    ${(props) =>
        props.type === "vertical" &&
        css`
            flex-direction: column;
            gap: 1.6rem;
        `}
    ${(props) =>
        props.edit === "edit" &&
        css`
            overflow-x: auto;
            /* &::-webkit-scrollbar {
                width: 0;
                height: 0;
            } */
            > div {
                min-width: 800px;
            }
        `}
`;

Row.defaultProps = {
    type: "vertical",
};

export default Row;
