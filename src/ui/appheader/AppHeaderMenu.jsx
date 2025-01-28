import styled from "styled-components";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "../global/ButtonIcon";
import AppLogout from "./AppLogout";
import DarkModeToggle from "../themes/DarkModeToggle";
import { App_Url } from "../../utils/constants";

// import ButtonIcon from "./ButtonIcon";
// import DarkModeToggle from "./DarkModeToggle";
// import Logout from "../features/authentication/Logout";

const StyledHeaderMenu = styled.ul`
    display: flex;
    gap: 0.4rem;
`;

function AppHeaderMenu() {
    const navigate = useNavigate();

    return (
        <>
            <StyledHeaderMenu>
                <li>
                    <ButtonIcon
                        onClick={() => {
                            navigate(`${App_Url}/account`);
                        }}
                    >
                        <HiOutlineUser />
                    </ButtonIcon>
                </li>

                <li>
                    <DarkModeToggle />
                </li>

                <li>
                    <AppLogout />
                </li>
            </StyledHeaderMenu>
        </>
    );
}

export default AppHeaderMenu;
