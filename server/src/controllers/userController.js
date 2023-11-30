import userService from "../services/userService";
const fs = require("fs");
const axios = require("axios");

const handleGetUserInfo = async (req, res) => {
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

}

const handleGetDoc = async (req, res) => {

    let doc = await userService.getDoc(req.body.userid)
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
const handleDeleteDoc = async (req, res) => {
    let message = await userService.deleteDoc(req.body.id);
    return res.status(200).json(message);
}

module.exports = {
    handleGetUserInfo, handleGetDoc, handleDeleteDoc,
};
