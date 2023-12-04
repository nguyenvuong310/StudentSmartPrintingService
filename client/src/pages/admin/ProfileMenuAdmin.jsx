import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
} from "@material-tailwind/react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { logout, getUser } from "../../service/userService";
import { useState, useEffect, cloneElement } from "react";

const ProfileMenuAdmin = (props) => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
    };
    const [userInfor, setUserInfor] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const info = await getUser();
                console.log(info);
                if (info && info.data && info.data.user && info.data.user._json) {
                    await setUserInfor(info.data.user._json);
                }
            } catch (error) {
                console.error("Error fetching user information:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <Menu>
            <MenuHandler>
                <Avatar
                    variant="circular"
                    className="cursor-pointer"
                    src={userInfor.picture}
                />
            </MenuHandler>
            <MenuList>
                <hr className="my-2 border-blue-gray-50" />
                <MenuItem className="flex items-center gap-2" onClick={handleLogout}>
                    <ArrowLeftOnRectangleIcon className="w-5" />
                    <Typography variant="small" className="font-medium">
                        Đăng xuất
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default ProfileMenuAdmin;