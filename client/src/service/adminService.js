import axios from "axios";
import { backendURL } from "../utils/constant";
const getAllUser = async () => {
    const url = `${backendURL}/api/getalluser`;
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
    });
};

const getBlockedUser = async () => {
    const url = `${backendURL}/api/getblockeduser`;
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
    });
}

const blockUser = async (data) => {
    const url = `${backendURL}/api/blockuser`;
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
        data: data
    });
}
const getAllPrinter = async () => {
    const url = `${backendURL}/api/admingetallprinter`;
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
    });
}
const deletePrinter = async (data) => {
    const url = `${backendURL}/api/deleteprinter`;
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
        data: data
    });
}
const getUserBySearch = async (data) => {
    const url = `${backendURL}/api/admingetuserbysearch`;
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
        data: data
    });
}
const getBlockedUserBySearch = async (data) => {
    const url = `${backendURL}/api/admingetblockeduserbysearch`;
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
        data: data
    });
}
const AddPrinter = async (data) => {
    const url = `${backendURL}/api/addprinter`;
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
        data: data
    });
}
const activePrinter = async (data) => {
    const url = `${backendURL}/api/activeprinter`;
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
        data: data
    });
}
const getHistory = async () => {
    const url = `${backendURL}/api/admingetprinthistory`;
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
    });
}
const getHistorybySearch = async (data) => {
    const url = `${backendURL}/api/admingetprinthistorybymssv`;
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
        data: data
    });
}
const UpdatePrinter = async (data) => {
    const url = `${backendURL}/api/updateprinter`;
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
        data: data
    });
}
const ConfirmPrinted = async (data) => {
    const url = `${backendURL}/api/confirmprinted`;
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
        data: data
    });
}
export {
    getAllUser,
    getBlockedUser,
    blockUser,
    getAllPrinter,
    deletePrinter,
    getUserBySearch,
    getBlockedUserBySearch,
    AddPrinter,
    activePrinter,
    getHistory,
    getHistorybySearch,
    UpdatePrinter,
    ConfirmPrinted
};