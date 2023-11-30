import userService from "../services/userService";
const fs = require("fs");
const axios = require("axios");

const handleGetPrinter = async (req, res) => {
    let printer = await userService.getPrinter();
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

const handleGetPrinterTime = async (req, res) => {
    // console.log("here: ", req)
    let printer = await userService.getPrinterTime(req.body.printerid);
    // console.log(printer)
    if (printer) {
        return res.status(200).json({
            errCode: 0,
            errMessage: "get printer time success",
            printer
        })
    } else {
        return res.status(404).json({
            errCode: 1,
            errMessage: "get printer time fail",
            printer: []
        })
    }
}
const handlePrint = async (req, res) => {
    let data = await userService.Print(req.body)
    if (data) {
        await userService.updatePrinter(req.body.setupprinter)
        return res.status(200).json({
            errCode: 0,
            errMessage: "print success",
        })
    } else {
        return res.status(404).json({
            errCode: 1,
            errMessage: "print fail",
        })
    }
}
const handleGetPrintHistory = async (req, res) => {
    let data = await userService.getprinthistory(req.body.userid)
    if (data) {
        return res.status(200).json({
            errCode: 0,
            errMessage: "get print history success",
            data
        })
    } else {
        return res.status(200).json({
            errCode: 1,
            errMessage: "get print history fail",
            data: []
        })
    }
}
module.exports = {
    handleGetPrinter, handleGetPrinterTime, handlePrint, handleGetPrintHistory
};
