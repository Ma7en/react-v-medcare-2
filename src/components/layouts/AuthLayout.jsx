/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

// utils
import { App_Admin, App_User } from "../../utils/constants";

// ui components
import Loader from "../../ui/loader/Loader";

function AuthLayout() {
    const { currentUser, synced } = useSelector((state) => state.currentUser);
    const navigate = useNavigate();

    if (!currentUser.id) {
        return <Navigate to="/login" />;
    }

    if (!currentUser) return <Loader />;

    if (currentUser?.is_superuser === true) {
        return <Navigate to={`/${App_Admin}/profile`} />;
    }

    if (currentUser?.is_superuser === false) {
        return <Navigate to={`/${App_User}/profile`} />;
    }

    // return (
    //     <>
    //         <Outlet />
    //     </>
    // );
}

export default AuthLayout;
