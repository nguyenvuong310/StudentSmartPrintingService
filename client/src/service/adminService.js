import axios from "axios";

const getAllUser = async () => {
    const url = "http://localhost:8080/api/getalluser";
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
    });
};

const getBlockedUser = async () => {
    const url = "http://localhost:8080/api/getblockeduser";
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
    });
}

const blockUser = async (data) => {
    const url = "http://localhost:8080/api/blockuser";
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
        data: data
    });
}
const getAllPrinter = async () => {
    const url = "http://localhost:8080/api/admingetallprinter";
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
    });
}
const deletePrinter = async (data) => {
    const url = "http://localhost:8080/api/deleteprinter";
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
        data: data
    });
}
const getUserBySearch = async (data) => {
    const url = "http://localhost:8080/api/admingetuserbysearch";
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
        data: data
    });
}
const getBlockedUserBySearch = async (data) => {
    const url = "http://localhost:8080/api/admingetblockeduserbysearch";
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
        data: data
    });
}
const AddPrinter = async (data) => {
    const url = "http://localhost:8080/api/addprinter";
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
};