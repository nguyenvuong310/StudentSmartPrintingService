import axios from "axios";
const handleAuth = (role) => {
  window.open(`http://localhost:8080/auth/google?role=${role}`, "_self");
};
const getUser = async () => {
  const url = `http://localhost:8080/auth/login/success`;
  return await axios.get(url, { withCredentials: true });
};
export { handleAuth, getUser };
