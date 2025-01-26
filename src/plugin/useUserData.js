/* eslint-disable no-unused-vars */
import Cookies from "js-cookie";
// import jwtDecode from "jwt-decode";
// import * as jwtDecode from "jwt-decode";
import { jwtDecode } from "jwt-decode";
import apiInstance from "../utils/axios";

function useUserData() {
    // Retrieve the access token and refresh token from browser cookies
    let access_token = Cookies.get("access_token");
    let refresh_token = Cookies.get("refresh_token");
    // let access_token =
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM2NjE1NTM5LCJpYXQiOjE3MzY2MTUyMzksImp0aSI6ImMwNTViOWI4Yzg5ZTQ3MjViYWZkZTgwZWE2YjRkYTY5IiwidXNlcl9pZCI6OSwiZnVsbF9uYW1lIjoiTWF6ZW4gU2FhZCIsImVtYWlsIjoibTEyQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoibTEyIiwidmVuZG9yX2lkIjowfQ.e-8kMStEyI-ibjDcW_got5-2HQPTVs94FQn9Jx_7srI";
    // let refresh_token =
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczNjcwMTYzOSwiaWF0IjoxNzM2NjE1MjM5LCJqdGkiOiJkN2YzMzkyNTQ2NDg0NWEzOWU3YzcxMjA3NTQzNGY0NCIsInVzZXJfaWQiOjksImZ1bGxfbmFtZSI6Ik1hemVuIFNhYWQiLCJlbWFpbCI6Im0xMkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Im0xMiIsInZlbmRvcl9pZCI6MH0.-kjeCeMuXZJAnO4qN5pNAfxEdjdIDLcOGF_F3P6hKNA";

    if (access_token && refresh_token) {
        // Both access and refresh tokens exist
        // Decode the refresh token to extract user information
        // const token = refresh_token;
        const token = access_token;
        const decoded = jwtDecode(token);

        // =================================================================
        // let datauser;
        // const fetchProfile = async () => {
        //     try {
        //         apiInstance
        //             .get(`user/profile/${decoded?.user_id}/`)
        //             .then((response) => {
        //                 datauser = response?.data;
        //                 // console.log(`datauser`, datauser);
        //             });
        //     } catch (error) {
        //         console.error("Error fetching profile", error);
        //         // Toast("error", `Error fetching profile ${error}`, "");
        //     }
        // };
        // fetchProfile();

        // Extract the user's unique identifier (user_id) from the decoded token
        // Return the decoded user data, which may include user information
        // return datauser;
        return decoded;
    } else {
        // console.log("Not Found");
        // One or both tokens (access or refresh) are missing
        // This block handles the case when either token is not present in the cookies.
        // You may want to perform error handling or redirection here
        // if access or refresh tokens are not available, based on your application's requirements.
        // For instance, you can uncomment the following lines to log a message:
        // console.log("Access token or refresh token is missing.");
        // Depending on your application, you might want to display a login form
        // or redirect the user to a login page if the tokens are missing.
        // This function is expected to return `undefined` if tokens are missing.
        // Handle the missing tokens as needed based on your application's logic.
    }
}

export default useUserData;
