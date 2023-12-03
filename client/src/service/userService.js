import axios from "axios";
const handleAuth = (role) => {
  window.open(`http://localhost:8080/auth/google?role=${role}`, "_self");
};
const getUser = async () => {
  const url = `http://localhost:8080/auth/login/success`;
  return await axios.get(url, { withCredentials: true });
};
const saveUserToLocalStorage = async (user) => {
  await localStorage.setItem("user", JSON.stringify(user));
};
const logout = () => {
  localStorage.removeItem("user");
  window.open(`http://localhost:8080/auth/logout`, "_self");
};

const getUserInfo = async () => {
  const url = "http://localhost:8080/api/getUserInfo";
  return await axios({
    url: url,
    method: "GET",
    withCredentials: true,
  });
}

const getListCourse = async () => {
  const url = "http://localhost:8080/api/getlistcourse";
  return await axios({
    url: url,
    method: "POST",
    withCredentials: true,
  });
}
const getDocByUserid = async (data) => {
  const url = `http://localhost:8080/api/getalldoc?userid=${data}`;;
  return await axios({
    url: url,
    method: "GET",
    withCredentials: true,
    data: data,
  })
}
const getPrivateDocBySearch = async (data) => {
  const url = "http://localhost:8080/api/getdocbysearch";
  return await axios({
    url: url,
    method: "POST",
    withCredentials: true,
    data: data,
  })
}
const uploadFile = async (data) => {
  const formData = new FormData();
  formData.append("file", data.file);
  formData.append("name", data.name);
  formData.append("course", data.course);
  formData.append("location", data.location);
  const url = "http://localhost:8080/drive/uploadFile"
  return await axios({
    url: url,
    method: "POST",
    data: formData,
    withCredentials: true,
  });
}
const getAllPrinter = async () => {
  const url = "http://localhost:8080/api/getallprinter";
  return await axios({
    url: url,
    method: "POST",
    withCredentials: true,
  });
}
const Print = async (data) => {
  const url = "http://localhost:8080/api/print";
  return await axios({
    url: url,
    method: "POST",
    withCredentials: true,
    data: data
  });
}
const buypage = async (data) => {
  const url = "http://localhost:8080/api/buypage";
  return await axios({
    url: url,
    method: "POST",
    withCredentials: true,
    data: data
  });
}
const getHistory = async (data) => {
  const url = "http://localhost:8080/api/getprinthistory";
  return await axios({
    url: url,
    method: "POST",
    withCredentials: true,
    data: data
  });
}
const getDocBySearchPublic = async (data) => {
  const url = "http://localhost:8080/api/getdocbysearchpublic";
  return await axios({
    url: url,
    method: "POST",
    withCredentials: true,
    data: data
  });
}
const getDocBySearchName = async (data) => {
  const url = "http://localhost:8080/api/getdocbysearchname";
  return await axios({
    url: url,
    method: "POST",
    withCredentials: true,
    data: data
  });
}
export {
  handleAuth,
  getUser,
  saveUserToLocalStorage,
  logout,
  getUserInfo,
  getDocByUserid,
  uploadFile,
  getListCourse,
  getAllPrinter,
  Print,
  getPrivateDocBySearch,
  buypage,
  getHistory,
  getDocBySearchPublic,
  getDocBySearchName,
};
