/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { FaHospital, FaProcedures, FaUserMd, FaUsers } from "react-icons/fa";
import styled from "styled-components";

//
import Heading from "../global/Heading";

const StyledIconBox = styled.div`
    background-color: var(--back-box);
    border: var(--border);
    box-shadow: var(--box-shadow);
    border-radius: 0.5rem;
    text-align: center;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        padding: 1.6rem 1rem;
    }

    svg {
        font-size: 4.5rem;
        color: var(--green);
        padding-bottom: 0.7rem;
    }
`;

const StyledNumber = styled.span`
    font-size: 4.5rem;
    color: var(--black);
    padding: 0.5rem 0;
    text-shadow: var(--text-shadow);
`;

function IconCom({ iconnumber }) {
    const navigate = useNavigate();

    const { icon, title, number } = iconnumber;

    return (
        <>
            <StyledIconBox
                onClick={() => {
                    navigate(`/book`);
                }}
            >
                {icon == "FaNotesMedical" && <FaHospital />}
                {icon === "FaProcedures" && <FaProcedures />}
                {icon === "FaUserMd" && <FaUserMd />}
                {icon === "FaUsers" && <FaUsers />}
                {/* {icon === "" || icon === undefined || (icon && <FaUserMd />)} */}

                <StyledNumber>{number}+</StyledNumber>

                <Heading as="h6">{title}</Heading>
            </StyledIconBox>
        </>
    );
}

export default IconCom;
