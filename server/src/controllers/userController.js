import userService from "../services/userService";
const fs = require("fs");
const axios = require("axios");
const { google } = require("googleapis");
import driveController from "../controllers/driveController";
const handleGetUserInfo = async (req, res) => {
    if (req.user && req.user._json && req.user._json.email) {
        let email = req.user._json.email;
        let user = await userService.getUserInfo(email);
        if (user) {
            return res.status(200).json({
                errCode: 0,
                errMessage: "User exit",
                user
            })
        } else {
            return res.status(200).json({
                errCode: 1,
                errMessage: "User not exit",
                user: []
            })
        }
    } else {
        return res.status(200).json({
            errCode: -1,
            errMessage: "Not logged yet ",
            user: [],
        });
    }
};

const handleGetDoc = async (req, res) => {
    if (req.user && req.user.accessToken) {
        try {
            const access_token = req.user.accessToken;
            let result = await driveController.checkAuth(access_token);
            //   console.log(result);
            if (result && result.errCode === 0) {
                const auth = result.auth;
                const drive = google.drive({ version: "v3", auth });
                // console.log(req.query);
                let doc = await userService.getDoc(drive, req.query.userid);
                // console.log("doc", doc.length);
                if (doc) {
                    return res.status(200).json({
                        errCode: 0,
                        errMessage: "Find document success",
                        doc,
                    });
                } else {
                    return res.status(200).json({
                        errCode: 1,
                        errMessage: "Find document fail",
                        doc: [],
                    });
                }
            } else {
                return res.status(200).json({
                    errCode: -1,
                    errMessage: result.errMessage,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
}
const handleDeleteDoc = async (req, res) => {
    let message = await userService.deleteDoc(req.body.id);
    return res.status(200).json(message);
}
const handleGetListCourse = async (req, res) => {
    let course = await userService.getCourse()
    if (course) {
        return res.status(200).json({
            errCode: 0,
            errMessage: "Get course success",
            course
        })
    } else {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Get course fail",
            course: []
        })
    }
}
const handleGetDocbySearch = async (req, res) => {
    if (req.user && req.user.accessToken) {
        try {
            const access_token = req.user.accessToken;
            let result = await driveController.checkAuth(access_token);
            //   console.log(result);
            if (result && result.errCode === 0) {
                const auth = result.auth;
                const drive = google.drive({ version: "v3", auth });
                // console.log(req.query);
                // let doc = await userService.getDoc(drive, req.query.userid);
                let doc = await userService.getDocbySearch(drive, req.body)
                // console.log("doc", doc.length);
                if (doc) {
                    return res.status(200).json({
                        errCode: 0,
                        errMessage: "Find document success",
                        doc,
                    });
                } else {
                    return res.status(200).json({
                        errCode: 1,
                        errMessage: "Find document fail",
                        doc: [],
                    });
                }
            } else {
                return res.status(200).json({
                    errCode: -1,
                    errMessage: result.errMessage,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }


}
const handleGetDocbySearchPublic = async (req, res) => {
    let doc = await userService.getDocbySearchPublic(req.body)
    if (doc) {
        return res.status(200).json({
            errCode: 0,
            errMessage: "Find document success",
            doc
        })
    } else {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Find document fail",
            doc: []
        })
    }
}
const handleGetDocbySearchName = async (req, res) => {
    let doc = await userService.getDocbySearchName(req.body)
    if (doc) {
        return res.status(200).json({
            errCode: 0,
            errMessage: "Find document success",
            doc
        })
    } else {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Find document fail",
            doc: []
        })
    }
}
module.exports = {
    handleGetUserInfo, handleGetDoc, handleDeleteDoc, handleGetListCourse, handleGetDocbySearch, handleGetDocbySearchPublic, handleGetDocbySearchName
};
