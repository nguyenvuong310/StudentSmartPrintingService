// checkValidToken.js
import axios from "axios";

const checkValidToken = async () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  try {
    if (storedUser && storedUser.accessToken) {
      const googleAccessToken = storedUser.accessToken;
      // Send the token to Google for validation
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${googleAccessToken}`,
      );

      // Check if the token is valid
      //   console.log("rep", response);
      console.log("valid", !response.data.error);
      return !response.data.error;
    } else {
      // No Google access token present
      return false;
    }
  } catch (error) {
    console.error("Google token validation failed:", error);
    return false;
  }
};

export default checkValidToken;
