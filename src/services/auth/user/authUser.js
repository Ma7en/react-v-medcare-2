/* eslint-disable no-unused-vars */
// Importing the userAuthStore hook from the '../store/auth' file to manage authentication state
import { userAuthStore } from "../../../store/userAuthStore";

// Importing the axios library for making HTTP requests
import axios from "../axios";

// Importing jwt_decode to decode JSON Web Tokens
// import jwt_decode from "jwt-decode";
// import * as jwt_decode from "jwt-decode";
import { jwtDecode } from "jwt-decode";

// Importing the Cookies library to handle browser cookies
import Cookies from "js-cookie";

// Importing Swal (SweetAlert2) for displaying toast notifications
import Swal from "sweetalert2";

// Configuring global toast notifications using Swal.mixin
const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
});

// Function to handle user login
export const login = async (email, password) => {
    try {
        // Making a POST request to obtain user tokens
        const { data, status } = await axios.post("user/login/", {
            email,
            password,
        });

        // console.log(`login`, data); // refresh, access token

        // If the request is successful (status code 200), set authentication user and display success toast
        if (status === 200) {
            setAuthUser(data?.access, data?.refresh);

            // Displaying a success toast notification
            Toast.fire({
                icon: "success",
                title: "Signed in successfully",
            });
        }

        // Returning data and error information
        return { data, error: null };
    } catch (error) {
        // Handling errors and returning data and error information
        return {
            data: null,
            error: error?.response?.data?.detail,
            // error?.response?.data?.detail ||
            // "Invalid Data" ||
            // "Something went wrong",
        };
    }
};

// =================================================================
// Function to handle user registration
export const userRegister = async (
    first_name,
    last_name,
    email,
    password,
    password2
) => {
    try {
        // Making a POST request to register a new user
        const { data } = await axios.post("auth/patient/register/", {
            first_name,
            last_name,
            email,
            password,
            password2,
        });

        // Displaying a success toast notification
        Toast.fire({
            icon: "success",
            title: "Sign Up Successfully.",
        });

        if (data) {
            let userData = localStorage.setItem(
                "userData",
                JSON.stringify(data?.data)
            );
        }

        // Returning data and error information
        return { data, error: null };
    } catch (error) {
        // Handling errors and returning data and error information
        return {
            data: null,
            error: error?.response?.data || "Something went wrong",
        };
    }
};

// Function to handle verification account
export const userVerifyAccount = async (otp_code) => {
    try {
        // Making a POST request to verify account
        const { data } = await axios.post("auth/patient/verify-account/", {
            otp_code,
        });

        // Displaying a success toast notification
        Toast.fire({
            icon: "success",
            title: "Verify Account Successfully.",
        });

        // Returning data and error information
        return { data, error: null };
    } catch (error) {
        // Handling errors and returning data and error information
        return {
            data: null,
            error: error?.response?.data || "Something went wrong",
        };
    }
};

// Function to handle Resend OTP
export const userResendOTP = async (email) => {
    try {
        // Making a POST request to resend OTP
        const { data } = await axios.post("auth/patient/resend-otp/", {
            email,
        });

        // Displaying a success toast notification
        Toast.fire({
            icon: "success",
            title: "OTP has been resent to your email.",
        });

        // Returning data and error information
        return { data, error: null };
    } catch (error) {
        // Handling errors and returning data and error information
        return {
            data: null,
            error: error?.response?.data || "Something went wrong",
        };
    }
};

// Function to handle user login
export const userLogin = async (email, password) => {
    try {
        // Making a POST request to login a new user
        const { data, status } = await axios.post("auth/patient/login/", {
            email,
            password,
        });

        // Displaying a success toast notification
        Toast.fire({
            icon: "success",
            title: "Login Successfully.",
        });

        if (status === 200 || data?.code === 0) {
            let userData = JSON.stringify(data?.data);
            setAuthUser(userData, data?.access_token, data?.refresh_token);
        }

        // Returning data and error information
        return { data, error: null };
    } catch (error) {
        // Handling errors and returning data and error information
        return {
            data: null,
            error: error?.response?.data || "Something went wrong",
        };
    }
};

// Function to set the authenticated user and update user state
export const setAuthUser = (data, access_token, refresh_token) => {
    // Setting access and refresh tokens in cookies with expiration dates
    Cookies.set("userData", data, {
        expires: 7, // Refresh token expires in 7 days
        secure: true,
    });

    Cookies.set("access_token", access_token, {
        expires: 1, // Access token expires in 1 day
        secure: true,
    });

    Cookies.set("refresh_token", refresh_token, {
        expires: 7, // Refresh token expires in 7 days
        secure: true,
    });

    // Decoding access token to get user information
    const user = jwtDecode(access_token) ?? null;
    // const user = jwt_decode(access_token) ?? null;
    // console.log(`--`, user);
    // console.log(`user`, user); // user_id: 9
    // let user;
    // if (access_token) {
    //     user = jwt_decode(access_token);
    //     console.log(`user`, user);
    // } else {
    //     console.error("Access token is missing");
    // }

    // console.log(`-userAuthStore:- `, userAuthStore);
    // console.log(
    //     `-userAuthStore.allUserData:- `,
    //     userAuthStore((state) => state.allUserData)
    // );
    // console.log(
    //     `-userAuthStore.loading:- `,
    //     userAuthStore((state) => state.loading)
    // );
    // console.log(
    //     `-userAuthStore.user:- `,
    //     userAuthStore((state) => state.user)
    // );
    // console.log(
    //     `-userAuthStore.setUser:- `,
    //     userAuthStore((state) => state.setUser)
    // );
    // console.log(
    //     `-userAuthStore.setLoading:- `,
    //     userAuthStore((state) => state.setLoading)
    // );
    // console.log(
    //     `-userAuthStore.isLoggedIn:- `,
    //     userAuthStore((state) => state.isLoggedIn)
    // );

    // If user information is present, update user state; otherwise, set loading state to false
    // if (user) {
    //     userAuthStore.getState().setUser(user);
    // }
    // userAuthStore.getState().setLoading(false);
};

// Function to handle user change password
export const userChangePassword = async (
    refresh_token,
    old_password,
    new_password,
    confirm_password
) => {
    try {
        // Making a POST request to register a new user
        const { data } = await axios.post("auth/patient/change-password/", {
            refresh_token,
            old_password,
            new_password,
            confirm_password,
        });

        // Displaying a success toast notification
        Toast.fire({
            icon: "success",
            title: "Change Password Successfully.",
        });

        // Returning data and error information
        return { data, error: null };
    } catch (error) {
        // Handling errors and returning data and error information
        return {
            data: null,
            error: error?.response?.data || "Something went wrong",
        };
    }
};

// Function to handle user Reset password
export const userResetPassword = async (email) => {
    try {
        // Making a POST request to Reset password
        const { data } = await axios.post("auth/patient/reset-password/", {
            email,
        });

        // Displaying a success toast notification
        Toast.fire({
            icon: "success",
            title: "Reset Password Successfully",
        });

        if (data) {
            let userData = localStorage.setItem(
                "userData",
                JSON.stringify(data?.data)
            );
        }

        // Returning data and error information
        return { data, error: null };
    } catch (error) {
        // Handling errors and returning data and error information
        return {
            data: null,
            error: error?.response?.data || "Something went wrong",
        };
    }
};

// Function to handle user Confirm Reset Password
export const userConfirmResetPassword = async (otp, password, password2) => {
    try {
        // Making a POST request to Confirm Reset Password
        const { data } = await axios.post(
            "auth/patient/confirm-reset-password/",
            {
                otp,
                password,
                password2,
            }
        );

        // Displaying a success toast notification
        Toast.fire({
            icon: "success",
            title: "Confirm Reset Password Successfully.",
        });

        // Returning data and error information
        return { data, error: null };
    } catch (error) {
        // Handling errors and returning data and error information
        return {
            data: null,
            error: error?.response?.data || "Something went wrong",
        };
    }
};

// =================================================================
// Function to handle user logout
export const logout = () => {
    // Removing access and refresh tokens from cookies, resetting user state, and displaying success toast
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    userAuthStore.getState().setUser(null);

    // Displaying a success toast notification
    Toast.fire({
        icon: "success",
        title: "You have been logged out.",
    });
};

// Function to set the authenticated user on page load
export const setUser = async () => {
    // Retrieving access and refresh tokens from cookies
    const accessToken = Cookies.get("access_token");
    const refreshToken = Cookies.get("refresh_token");

    // Checking if tokens are present
    if (!accessToken || !refreshToken) {
        return;
    }

    // If access token is expired, refresh it; otherwise, set the authenticated user
    if (isAccessTokenExpired(accessToken)) {
        const response = await getRefreshToken(refreshToken);
        setAuthUser(response.access, response.refresh);
    } else {
        setAuthUser(accessToken, refreshToken);
    }
};

// Function to refresh the access token using the refresh token
export const getRefreshToken = async () => {
    // Retrieving refresh token from cookies and making a POST request to refresh the access token
    const refresh_token = Cookies.get("refresh_token");
    // const refresh_token =
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczNjcwMTYzOSwiaWF0IjoxNzM2NjE1MjM5LCJqdGkiOiJkN2YzMzkyNTQ2NDg0NWEzOWU3YzcxMjA3NTQzNGY0NCIsInVzZXJfaWQiOjksImZ1bGxfbmFtZSI6Ik1hemVuIFNhYWQiLCJlbWFpbCI6Im0xMkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Im0xMiIsInZlbmRvcl9pZCI6MH0.-kjeCeMuXZJAnO4qN5pNAfxEdjdIDLcOGF_F3P6hKNA";

    if (refresh_token === "undefined") {
        // console.log(`1`, refresh_token);
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
    }

    const response = await axios.post("user/token/refresh/", {
        refresh: refresh_token,
    });

    // console.log(`response`, response);

    // Returning the refreshed access token
    return response?.data; // Return the access token
};

// Function to check if the access token is expired
export const isAccessTokenExpired = (accessToken) => {
    try {
        // Decoding the access token and checking if it has expired
        // const decodedToken = jwt_decode(accessToken);
        const decodedToken = jwtDecode(accessToken);
        return decodedToken.exp < Date.now() / 1000;
    } catch (error) {
        // console.log(error);
        // Returning true if the token is invalid or expired
        return true;
    }
};
