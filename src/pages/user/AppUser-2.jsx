/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

// style
// import styles from "./User.module.css";

// utils
import { App_Url } from "../../utils/constants";

// import { useAuth } from "../contexts/FakeAuthContext";
// import { useUser } from "../features/authentication/useUser";
// import { useLogout } from "../features/authentication/useLogout";

// ui
import SpinnerMini from "../../ui/spinner/SpinnerMini";
import DarkModeToggle from "../../ui/themes/DarkModeToggle";

function User() {
    // const { user, logout } = useAuth();
    // const navigate = useNavigate();

    // function handleClick() {
    //     logout();
    //     navigate("/");
    // }
    const navigate = useNavigate();
    // const { user } = useUser();
    // const { logout, isLoading } = useLogout();
    const { user } = useState();
    const { logout, isLoading } = useState();
    // const { fullName, avatar } = user?.user_metadata;

    return (
        <>
            <div className={`styles.user`}>
                {/* <img src={user.avatar} alt={user.name} /> */}

                <NavLink to={`${App_Url}/account`}>
                    <img
                    // src={avatar || "/images/default-user.jpg"}
                    // alt={`Avatar of ${fullName}`}
                    // onClick={() => navigate("/account")}
                    />
                </NavLink>

                {/* <span>Welcome, {fullName}</span> */}
                <DarkModeToggle />
                {/* <button onClick={handleClick}>Logout</button> */}
                <button disabled={isLoading} onClick={logout}>
                    {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
                </button>
            </div>
            {/* <div>user</div> */}
        </>
    );
}

export default User;

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx`
2) In the `Login.jsx` page, call `login()` from context
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
