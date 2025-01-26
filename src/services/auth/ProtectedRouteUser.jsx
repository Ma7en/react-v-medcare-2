/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Import the 'Navigate' component from the 'react-router-dom' library.
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// // Import the 'useAuthStore' function from a custom 'auth' store.
// // store
// import { useAuthStore } from "../../store/auth";

// // plugin
// import useUserData from "../../plugin/useUserData";
// import Toast from "../../plugin/Toast";

// // utils
// import apiInstance from "../../utils/axios";
// import { App_Company } from "../../utils/constants";
import { App_Admin, App_User } from "../../utils/constants";

// // ui components
import Loader from "../loader/Loader";
import { useSelector } from "react-redux";

// Define the 'PrivateRoute' component as a functional component that takes 'children' as a prop.
const ProtectedRouteUser = ({ children }) => {
    const { currentUser, synced } = useSelector((state) => state.currentUser);
    const navigate = useNavigate();

    if (synced === false) {
        return <Navigate to="/login" />;
    }

    // if (!currentUser) return <Loader />;

    if (currentUser?.is_active === false) {
        return <Navigate to="/signupsuccess" />;
    }

    if (currentUser?.is_superuser === true) {
        return <Navigate to={`/${App_Admin}/profile`} />;
    }

    if (currentUser?.is_superuser === false) {
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

    // const activeA = localStorage.getItem("active");
    // if (activeA === "null") {
    //     console.log(`333`);
    //     return <Navigate to={`/confirmemail`} />;
    // }

    // if (profileData?.user?.is_superuser === false) {
    //     return <>{children}</>;
    // } else {
    //     return <Navigate to={`/${App_Company}/profile`} />;
    // }
    // return <Navigate to={`/${App_User}/profile`} />;

    // return <>{children}</>;

    // console.log(`--->`, profileData?.user?.is_superuser);
    // if (profileData?.user?.is_superuser)
    //     return <Navigate to={`/${App_Company}/profile`} />;

    // // Conditionally render the children if the user is authenticated.
    // // If the user is not authenticated, redirect them to the login page.
    // return loggedIn ? <>{children}</> : <Navigate to="/login" />;
};

// Export the 'PrivateRoute' component to make it available for use in other parts of the application.
export default ProtectedRouteUser;
