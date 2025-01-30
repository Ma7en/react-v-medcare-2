/* eslint-disable no-unused-vars */
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

function useUserData() {
    // Retrieve the access token and refresh token from browser cookies
    let userdata = Cookies.get("userData");
    let access_token = Cookies.get("access_token");
    let refresh_token = Cookies.get("refresh_token");

    if (userdata && refresh_token) {
        const token = refresh_token;
        const decoded = jwtDecode(token);

        // Extract the user's unique identifier (user_id) from the decoded token
        // Return the decoded user data, which may include user information
        // return datauser;
        let userData = JSON.parse(userdata);
        return { userData, decoded };
    } else {
        return {};
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
