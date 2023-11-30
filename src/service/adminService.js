import axios from "axios";

const getAllUser = async() => {
    const url = "http://localhost:8080/api/getalluser";
    return await axios({
        url:url,
        method:"POST",
        withCredentials:true,
    });
};

const getBlockedUser = async() => {
    const url = "http://localhost:8080/api/getblockeduser";
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
    });
}

const blockUser = async(data) => {
    const url = "http://localhost:8080/api/blockuser";
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
        data : data,
    });
}

export {getAllUser, getBlockedUser,blockUser};