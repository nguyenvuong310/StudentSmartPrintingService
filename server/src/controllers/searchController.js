import userService from "../services/userService";
const fs = require("fs");
const axios = require("axios");

const handleSearch = async (req, res) => {
    let doc = await userService.searchDoc(req.body)
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
    handleSearch
};
