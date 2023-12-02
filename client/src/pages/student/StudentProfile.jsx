import BuyPageModal from "../../components/BuyPageModal";
import {
    Avatar,
} from "@material-tailwind/react";
import { saveUserToLocalStorage } from "../../service/userService";
import { getUser, getUserInfo } from "../../service/userService";
import { useState, useEffect } from "react";
import WelcomeIcon from "../../assets/ae.png"
const StudentProfile = () => {
    const [userInfor, setUserInfor] = useState({});
    const [userinfo, setUserinfo] = useState({})
    const [buyed, setbuyed] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const info = await getUser();
                if (info && info.data && info.data.user && info.data.user._json) {
                    setUserInfor(info.data.user._json);
                }
                const data = await getUserInfo();
                if (data) setUserinfo(data.data.user)
            } catch (error) {
                console.error("Error fetching user information:", error);
            }
        };

        fetchData();
    }, [buyed]);
    const handleAfterBuy = (data) => {
        setbuyed(data)
    }
    return (
        <>
            <div className="w-full h-[20rem] ">
                <div className="justify-between flex flex-row h-[15rem] bg-profile-fill m-5 p-5 rounded-xl ">
                    <div className="flex flex-row">
                        <Avatar
                            variant="circular"
                            className="cursor-pointer"
                            src={WelcomeIcon}
                            size="xxl"
                        />
                        <div className="text-white font-semibold px-3 my-6 text-xl">
                            Xin chào {userInfor.given_name} !
                        </div>
                    </div>
                    <div className="flex flex-row space-x-5">
                        <BuyPageModal userinfo={userinfo} input={handleAfterBuy} buyed={buyed} />
                    </div>

                </div>
            </div>
            <section class="relative items-center py-16">
                <div class="container mx-auto px-4 ">
                    <div class="relative flex flex-col min-w-0 bg-[#C3D4E9] w-[70rem] mb-6 h-[30rem] shadow-xl rounded-lg -mt-64 ml-24">
                        <div className="w-[65rem] h-[5rem] bg-[#54A6FF] m-8 rounded-2xl">
                            <div className="grid grid-cols-2 gap-[10.25rem] m-6 mx-[9rem]">
                                <div className="text-xl font-bold">
                                    Kì hiện tại: 231
                                </div>
                                <div className="text-xl font-bold">
                                    Từ 1/9/2023 đến 25/12/2023
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full rounded-2xl">
                            <div className="grid grid-cols-2 gap-6 ml-[7rem]">
                                <div className="w-[30rem] h-[20rem] bg-white border border-black rounded-2xl">
                                    <div className="flex flex-col">
                                        <div className="text-xl font-bold p-5 border-b-2 border-gray-500 mx-5">
                                            Thông tin cá nhân
                                        </div>
                                        <div className="grid grid-cols-1 gap-6 p-5">
                                            <p className="text-lg">
                                                Tên người dùng: {userInfor.family_name} {userInfor.given_name}
                                            </p>
                                            <p className="text-lg">
                                                Email: {userInfor.email}
                                            </p>
                                            <p className="text-lg">
                                                Số trang đã sử dụng: {userinfo.numpageused}
                                            </p>
                                            <p className="text-lg">
                                                Số trang còn lại: {userinfo.numpage - userinfo.numpageused}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[23rem] h-[20rem] bg-white border border-black rounded-2xl">
                                    <div className="flex flex-col">
                                        <div className="text-xl font-bold p-5 border-b-2 border-gray-500 mx-5">
                                            Nội dung khác
                                        </div>
                                        <div className="grid grid-cols-1 gap-6 p-5">
                                            <p className="text-lg">
                                                Hướng dẫn sử dụng
                                            </p>
                                            <p className="text-lg">
                                                Điều khoản
                                            </p>
                                            <p className="text-lg">
                                                Quyền riêng tư
                                            </p>
                                            <p className="text-lg">
                                                Feedback về website
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    );
};

export default StudentProfile;