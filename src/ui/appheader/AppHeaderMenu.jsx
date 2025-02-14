import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";

// store
import useUserData from "../../store/userDataStore";

// utils
import { App_User } from "../../utils/constants";

// ui components
import AppLogout from "./AppLogout";

// ui
import ButtonIcon from "../global/ButtonIcon";
import DarkModeToggle from "../themes/DarkModeToggle";

// import ButtonIcon from "./ButtonIcon";
// import DarkModeToggle from "./DarkModeToggle";
// import Logout from "../features/authentication/Logout";

const StyledHeaderMenu = styled.ul`
    display: flex;
    gap: 0.4rem;
`;

function AppHeaderMenu() {
    const navigate = useNavigate();
    let { userData } = useUserData();

    return (
        <>
            <StyledHeaderMenu>
                <li>
                    <ButtonIcon
                        onClick={() => {
                            navigate(`/${App_User}/account/${userData?.id}`);
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
