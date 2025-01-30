/* eslint-disable no-unused-vars */
import { useState } from "react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

// services
import { userLogout } from "../../services/auth/user/authUser";

// plugins
import Toast from "../../plugin/Toast";

// ui
import ButtonIcon from "../global/ButtonIcon";
import SpinnerMini from "../spinner/SpinnerMini";

// import ButtonIcon from "../../ui/ButtonIcon";
// import SpinnerMini from "../../ui/SpinnerMini";

function AppLogout() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorsMessage, setErrorsMessage] = useState("");
    let refresh_token = Cookies.get("refresh_token");

    const { register, formState, getValues, handleSubmit, reset } = useForm();
    const { errors } = formState;

    const handleLogout = async () => {
        try {
            if (errors?.root) {
                return;
            }

            const { data, error } = await userLogout(refresh_token);

            if (error) {
                if (error?.message) {
                    setErrorsMessage(error?.message);
                    Toast("error", `${error?.message}.`);
                    setIsLoading(false);
                }
            } else {
                setIsLoading(true);
                Toast("success", `${data?.message || "Logout Successfully."}`);
                navigate(`/login`);
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    // const { logout, isLoading } = useLogout();
    // const { logout, isLoading } = useState();

    return (
        <>
            <ButtonIcon
                disabled={isLoading}
                onClick={() => {
                    handleLogout();
                }}
            >
                {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
            </ButtonIcon>
        </>
    );
}

export default AppLogout;
