import { path, USER_ROLE } from "../utils/constant";
import { useNavigate } from "react-router-dom";



const LoginPage = () => {
    const navigate = useNavigate();
    const handleLogin = async (role) => {
        if (role === "user") {

            navigate(path.HOMEPAGEUSER);
        } else {
            navigate(path.HOMEPAGEADMIN);
        }
    };
    return (
        <>

            <button className="rounded-md bg-blue-700 px-3 py-2 text-sm font-medium text-white" onClick={() => handleLogin("user")}>
                Login as User
            </button>
            <button className="rounded-md bg-blue-700 px-3 py-2 text-sm font-medium text-white" onClick={() => handleLogin("admin")}>
                Login as Admin
            </button>

        </>
    );
}

export default LoginPage
