import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "../../features/authentication/useLogout";
import ButtonIcon from "../global/ButtonIcon";
import SpinnerMini from "../spinner/SpinnerMini";

// import ButtonIcon from "../../ui/ButtonIcon";
// import SpinnerMini from "../../ui/SpinnerMini";

// import { useLogout } from "./useLogout";

function AppLogout() {
    const { logout, isLoading } = useLogout();

    return (
        <>
            <ButtonIcon disabled={isLoading} onClick={logout}>
                {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
            </ButtonIcon>
        </>
    );
}

export default AppLogout;
