import userService from "../services/userService";
const fs = require("fs");
const axios = require("axios");

const handleBuyPage = async (req, res) => {
    let bill = await userService.buyPage(req.body)
    if (bill) {
        return res.status(200).json({
            errCode: 0,
            errMessage: "Buy Page success",
        })
    } else {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Buy Page fail",
        })
    }
}
const handleGetBuyHistory = async (req, res) => {
    let data = await userService.getbuyhistory(req.body.userid)
    if (data) {
        return res.status(200).json({
            errCode: 0,
            errMessage: "get buy history success",
            data
        })
    } else {
        return res.status(200).json({
            errCode: 1,
            errMessage: "get buy history fail",
            data: []
        })
    }
}
module.exports = {
    handleBuyPage, handleGetBuyHistory
};
