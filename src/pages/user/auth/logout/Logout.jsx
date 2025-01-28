import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useState } from "react";

// import { useLogout } from "../../../../features/authentication/useLogout";

// ui
import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
    // const { logout, isLoading } = useLogout();
    const { logout, isLoading } = useState();

    return (
        <>
            <ButtonIcon disabled={isLoading} onClick={logout}>
                {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
            </ButtonIcon>
        </>
    );
}

export default Logout;
