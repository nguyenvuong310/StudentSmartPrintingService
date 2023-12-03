import userService from "../services/userService";
const { google } = require("googleapis");
const fs = require("fs");
const pdf = require("pdf-parse");
const axios = require("axios");
const { Readable } = require("stream");
const handleCreateFolder = async (req) => {
  if (req.user && req.user.accessToken) {
    try {
      const accessToken = req.user.accessToken;
      const isTokenValid = await validateGoogleToken(accessToken);

      if (!isTokenValid) {
        return;
      }
      // Initialize the Google Drive API client
      const auth = new google.auth.OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET
      );
      auth.setCredentials({ access_token: accessToken });
      const drive = google.drive({ version: "v3", auth });

      // Create a folder in Google Drive
      const folderMetadata = {
        name: "SmartPrintingService", // Replace with the desired folder name
        mimeType: "application/vnd.google-apps.folder",
      };

      const folder = await drive.files.create({
        resource: folderMetadata,
        fields: "id",
      });
      // let message = await userService.createNewUser(folder.data.id);
      console.log(`Folder created with ID: ${folder.data.id}`);
      return folder.data.id;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        // Extract the specific error message from the Google Drive API response
        const googleDriveError = error.response.data.error;

        // You can access specific error fields, for example, the message field
        const errorMessage = googleDriveError.message;
        console.error("Google Drive API Error:", errorMessage);
        return -1;
        // You can handle the specific error message here or send it in your respons
      }
    }
  } else {
    return -1;
  }
};

const handleUploadFile = async (req, res) => {
  try {
    let folderId;
    if (req.body.location === "private") {
      console.log("hello");
      folderId = await userService.getFolderId(req.user._json.email);
      if (!folderId) {
        folderId = await handleCreateFolder(req);
        await userService.updateFolderId(req.user._json.email, folderId);
      }
    } else {
      folderId = "15P_UWZOdS5zomYPWzsSNlzOaEgOU1MqI";
    }

    if (!req.file) {
      res.status(400).send("No file uploaded.");
      return;
    }

    const accessToken = req.user.accessToken;
    const result = await checkAuth(accessToken);
    if (result && result.errCode === 0) {
      const auth = result.auth;
      const drive = google.drive({ version: "v3", auth });

      const numpage = await getNumberOfPages(req.file.buffer);

      const fileMetadata = {
        name: req.body.name,
        parents: [folderId],
      };

      const media = {
        mimeType: req.file.mimetype,
        body: Readable.from(req.file.buffer),
      };

      const file = await drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: "id",
        supportsAllDrives: true,
      });

      let link = file.data.id;

      await userService.saveDoc(
        req.user._json.email,
        req.body.name,
        link,
        req.body.course,
        req.body.location,
        numpage
      );
      console.log("Upload success");
      res.status(200).json({ errCode: 0, message: "Upload success" });
    } else {
      res.status(400).send(result.errMessage);
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const checkAuth = (accessToken) => {
  return new Promise(async (resolve, reject) => {
    try {
      const isTokenValid = await validateGoogleToken(accessToken);

      if (!isTokenValid) {
        resolve({ errCode: 1, errMessage: "Invalid or expired token." });
      }

      const auth = new google.auth.OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET
      );
      auth.setCredentials({ access_token: accessToken });
      resolve({ errCode: 0, auth });
    } catch (error) {
      reject(error);
    }
  });
};
const validateGoogleToken = async (accessToken) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${accessToken}`
    );

    if (response.status === 200) {
      // Token is valid; you can also access token information in response.data
      return true;
    } else {
      // Token is not valid
      return false;
    }
  } catch (error) {
    // An error occurred while validating the token
    console.error("Error validating token:", error.message);
    return false;
  }
};
const getNumberOfPages = async (buffer) => {
  const pdfData = await pdf(buffer);
  return pdfData.numpages;
};
module.exports = {
  handleCreateFolder,
  handleUploadFile,
};
