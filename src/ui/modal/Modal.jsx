/* eslint-disable react/prop-types */

import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled, { css } from "styled-components";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    /* background-color: var(--backdrop-color); */
    backdrop-filter: blur(4px);
    z-index: 1000;
    transition: var(--main-transition);
    overflow-y: auto;
`;

const StyledModal = styled.div`
    width: 80%;
    position: fixed;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -0%);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    padding: 3.2rem 4rem;
    transition: var(--main-transition);

    background-color: var(--back-box);
    border: var(--border);
    box-shadow: var(--box-shadow);
    border-radius: 0.5rem;
    ${(props) =>
        props.type === "delete" &&
        css`
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 80rem;
            /* font-size: 3rem;
            font-weight: 600; */
        `}
    /* start max 767px */
    @media (max-width: 767px) {
        width: 100%;
        padding: 0;
        ${(props) =>
            props.type === "delete" &&
            css`
                width: 90%;
                padding: 1.5rem 2rem;
            `}
    }
`;

const StyledDivClone = styled.div`
    width: 100%;
`;

const Button = styled.button`
    background: none;
    border: none;
    /* padding: 0.4rem; */
    /* border-radius: var(--border-radius-sm); */
    border-radius: 50%;
    color: var(--color-brand-600);
    transform: translateX(0.8rem);
    position: absolute;
    top: 1.2rem;
    right: 1.9rem;

    /* border: 1px solid var(--color-grey-500); */
    border-radius: 50%;

    z-index: 5;
    transition: var(--main-transition);

    width: 3rem;
    height: 3rem;
    border: var(--border);
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        /* background-color: var(--color-grey-100); */
        background-color: var(--color-brand-600);
        color: var(--color-grey-0);

        border-color: transparent;
        transition: var(--main-transition);
        svg {
            color: var(--color-grey-500);
            transition: var(--main-transition);
        }
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        /* Sometimes we need both */
        /* fill: var(--color-grey-500);
        stroke: var(--color-grey-500); */

        color: var(--color-grey-500);
        transition: var(--main-transition);
        &:hover {
            color: var(--color-grey-500);
            transition: var(--main-transition);
        }
    }
`;

// 1) create a context
const ModalContext = createContext();

// 2) create parent component
function Modal({ children }) {
    const [openName, setOpenName] = useState("");
    const close = () => setOpenName("");
    const open = setOpenName;

    return (
        <ModalContext.Provider value={{ openName, close, open }}>
            {children}
        </ModalContext.Provider>
    );
}

// 3) create child components to help implementing
function Open({ children, opens: opensWindowName }) {
    const { open } = useContext(ModalContext);
    return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
    const { openName, close } = useContext(ModalContext);

    const ref = useOutsideClick(close);

    if (name !== openName) return null;

    return createPortal(
        <Overlay>
            <StyledModal ref={ref} type={openName === "delete" && "delete"}>
                <Button onClick={close}>
                    <HiXMark />
                </Button>

                <StyledDivClone>
                    {cloneElement(children, { onCloseModal: close })}
                </StyledDivClone>
            </StyledModal>
        </Overlay>,
        document.body,
    );
}

// 4) add child components as proeprties to parent component
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
