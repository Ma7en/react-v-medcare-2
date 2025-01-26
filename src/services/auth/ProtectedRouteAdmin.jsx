/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Import the 'Navigate' component from the 'react-router-dom' library.
// import { Navigate, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { App_User } from "../../utils/constants";
import Loader from "../loader/Loader";

// // Import the 'useAuthStore' function from a custom 'auth' store.
// // store
// import { useAuthStore } from "../../store/auth";

// // plugin
// import useUserData from "../../plugin/useUserData";
// import Toast from "../../plugin/Toast";

// // utils
// import apiInstance from "../../utils/axios";
// import { App_User } from "../../utils/constants";

// // ui components
// import Loader from "../loader/Loader";

// Define the 'PrivateRoute' component as a functional component that takes 'children' as a prop.
const ProtectedRouteAdmin = ({ children }) => {
    const { currentUser, synced } = useSelector((state) => state.currentUser);
    const navigate = useNavigate();
    // console.log(`ee---`, synced);

    // console.log(`current`, currentUser);

    // if (!currentUser) return <Loader />;

    if (synced === false) {
        return <Navigate to="/login" />;
    }

    if (currentUser?.is_superuser === false) {
        return <Navigate to={`/${App_User}/profile`} />;
    }

    if (currentUser?.is_superuser === true) {
        return <>{children}</>;
    }

    // =================================================================
    // // Use the 'useAuthStore' hook to check the user's authentication status.
    // // It appears to be using a state management solution like 'zustand' or 'mobx-state-tree'.
    // const loggedIn = useAuthStore((state) => state.isLoggedIn)();

    // // company
    // const [profileData, setProfileData] = useState();
    // const userId = useUserData()?.user_id;

    // useEffect(() => {
    //     if (userId) fetchProfile();
    // }, [userId]);

    // const fetchProfile = async () => {
    //     try {
    //         apiInstance.get(`user/profile/${userId}/`).then((res) => {
    //             setProfileData(res.data);
    //         });
    //     } catch (error) {
    //         // console.error("Error fetching profile", error);
    //         Toast("error", `Error fetching profile ${error}`, "");
    //     }
    // };

    // if (!loggedIn) {
    //     return <Navigate to="/login" />;
    // }

    // if (!profileData) return <Loader />;
    // // console.log(`99--`, profileData?.user?.is_superuser);
    // // console.log(`99--`, !profileData?.user?.is_superuser);
    // if (profileData?.user?.is_superuser === false)
    //     return <Navigate to={`/${App_User}/profile`} />;
    // return <>{children}</>;
    // return <Navigate to={`/${App_User}/profile`} />;

    // if (profileData?.user?.is_superuser) {
    //     console.log(`33`);
    //     return <>{children}</>;
    // } else {
    //     console.log(`555`);
    //     return <Navigate to={`/${App_User}/profile`} />;
    // }

    // return <>{children}</>;
    //     {
    //     return <>{children}</>;
    // } else {
    //     <Navigate to="/admin" />;
    // }

    // console.log(`--->`, profileData?.user?.is_superuser);
    // if (!profileData?.user?.is_superuser) return <Navigate to="/admin" />;
    // console.log(`dddd`);

    // Conditionally render the children if the user is authenticated.
    // If the user is not authenticated, redirect them to the login page.
    // return loggedIn ? <>{children}</> : <Navigate to="/admin" />;
};

// Export the 'ProtectedRouteCompany' component to make it available for use in other parts of the application.
export default ProtectedRouteAdmin;
