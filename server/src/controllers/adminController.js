import adminService from "../services/adminService";
const fs = require("fs");
const axios = require("axios");

const handleGetAllUser = async (req, res) => {
    let data = await adminService.getAllUser();
    if (data) {
        return res.status(200).json({
            errCode: 0,
            errMessage: "Get user success",
            data
        })
    } else {
        return res.status(200).json({
            errCode: 1,
            errMessage: "get user fail",
            data: []
        })
    }
}
const handleGetBlockedUser = async (req, res) => {
    let data = await adminService.getBlockedUser();
    if (data) {
        return res.status(200).json({
            errCode: 0,
            errMessage: "Get user success",
            data
        })
    } else {
        return res.status(200).json({
            errCode: 1,
            errMessage: "get user fail",
            data: []
        })
    }
}
const handleGetAllPrinter = async (req, res) => {
    let printer = await adminService.getPrinter();
    if (printer) {
        return res.status(200).json({
            errCode: 0,
            errMessage: "get printer success",
            printer
        })
    } else {
        return res.status(200).json({
            errCode: 1,
            errMessage: "get printer fail",
            printer: []
        })
    }
}
const handleBlockUser = async (req, res) => {
    let message = await adminService.blockUser(req.body.userid)
    return res.status(200).json(message)
}
const handleDeletePrinter = async (req, res) => {
    let message = await adminService.deletePrinter(req.body.printerid);
    return res.status(200).json(message);
}
const handleGetPrintHistory = async (req, res) => {
    let history = await adminService.getPrintHistory();
    if (history) {
        return res.status(200).json({
            errCode: 0,
            errMessage: "get print history success",
            history
        })
    } else {
        return res.status(200).json({
            errCode: 1,
            errMessage: "get print history fail",
            history: []
        })
    }
}
const handleGetPrintHistoryByMSSV = async (req, res) => {
    let history = await adminService.getPrintHistoryByMSSV(req.body.userid);
    if (history) {
        return res.status(200).json({
            errCode: 0,
            errMessage: "get print history success",
            history
        })
    } else {
        return res.status(200).json({
            errCode: 1,
            errMessage: "get print history fail",
            history: []
        })
    }
}
const handleAddPrinter = async (req, res) => {
    let data = await adminService.getAddPrinter(req.body);
    if (data) {
        return res.status(200).json({
            errCode: 0,
            errMessage: "add printer success",
            data
        })
    } else {
        return res.status(200).json({
            errCode: 1,
            errMessage: "add printer fail",
            data: []
        })
    }
}
const handleUpdatePrinter = async (req, res) => {
    let data = await adminService.updatePrinter(req.body);
    if (data) {
        return res.status(200).json({
            errCode: 0,
            errMessage: "update printer success",
        })
    } else {
        return res.status(200).json({
            errCode: 1,
            errMessage: "update printer fail",
        })
    }
}
module.exports = {
    handleGetAllUser,
    handleGetBlockedUser,
    handleGetAllPrinter,
    handleBlockUser,
    handleDeletePrinter,
    handleGetPrintHistory,
    handleGetPrintHistoryByMSSV,
    handleAddPrinter,
    handleUpdatePrinter,
};
