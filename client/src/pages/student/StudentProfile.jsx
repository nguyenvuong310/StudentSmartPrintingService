import BuyPageModal from "../../components/BuyPageModal";
import { Avatar } from "@material-tailwind/react";
import { saveUserToLocalStorage } from "../../service/userService";
import { getUser, getUserInfo } from "../../service/userService";
import { useState, useEffect } from "react";
import WelcomeIcon from "../../assets/ae.png";
const StudentProfile = () => {
  const [userInfor, setUserInfor] = useState({});
  const [userinfo, setUserinfo] = useState({});
  const [buyed, setbuyed] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const info = await getUser();
        if (info && info.data && info.data.user && info.data.user._json) {
          setUserInfor(info.data.user._json);
        }
        const data = await getUserInfo();
        if (data) setUserinfo(data.data.user);
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    fetchData();
  }, [buyed]);
  const handleAfterBuy = (data) => {
    setbuyed(data);
  };
  return (
    <>
      <div className="h-[20rem] w-full ">
        <div className="m-5 flex h-[15rem] flex-row justify-between rounded-xl bg-profile-fill p-5 ">
          <div className="flex flex-row">
            <Avatar
              variant="circular"
              className="cursor-pointer"
              src={WelcomeIcon}
              size="xxl"
            />
            <div className="my-6 px-3 text-xl font-semibold text-white">
              Xin chào {userInfor.given_name} !
            </div>
          </div>
          <div className="flex flex-row space-x-5">
            <BuyPageModal
              userinfo={userinfo}
              input={handleAfterBuy}
              buyed={buyed}
            />
          </div>
        </div>
      </div>
      <section class="relative items-center py-16">
        <div class="container mx-auto px-4 ">
          <div class="relative -mt-64 mb-6 ml-24 flex h-[30rem] w-[70rem] min-w-0 flex-col rounded-lg bg-[#C3D4E9] shadow-xl">
            <div className="m-8 h-[5rem] w-[65rem] rounded-2xl bg-[#54A6FF]">
              <div className="m-6 mx-[9rem] grid grid-cols-2 gap-[10.25rem]">
                <div className="text-xl font-bold">Kì hiện tại: 231</div>
                <div className="text-xl font-bold">
                  Từ 1/9/2023 đến 25/12/2023
                </div>
              </div>
            </div>
            <div className="h-full w-full rounded-2xl">
              <div className="ml-[7rem] grid grid-cols-2 gap-6">
                <div className="h-[20rem] w-[30rem] rounded-2xl border border-black bg-white">
                  <div className="flex flex-col">
                    <div className="mx-5 border-b-2 border-gray-500 p-5 text-xl font-bold">
                      Thông tin cá nhân
                    </div>
                    <div className="grid grid-cols-1 gap-6 p-5">
                      <p className="text-lg">
                        Tên người dùng: {userInfor.family_name}{" "}
                        {userInfor.given_name}
                      </p>
                      <p className="text-lg">Email: {userInfor.email}</p>
                      <p className="text-lg">
                        Số trang đã sử dụng: {userinfo.numpageused}
                      </p>
                      <p className="text-lg">
                        Số trang còn lại (theo A4):{" "}
                        {userinfo.numpage - userinfo.numpageused}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-[20rem] w-[23rem] rounded-2xl border border-black bg-white">
                  <div className="flex flex-col">
                    <div className="mx-5 border-b-2 border-gray-500 p-5 text-xl font-bold">
                      Nội dung khác
                    </div>
                    <div className="grid grid-cols-1 gap-6 p-5">
                      <p className="text-lg">Hướng dẫn sử dụng</p>
                      <p className="text-lg">Điều khoản</p>
                      <p className="text-lg">Quyền riêng tư</p>
                      <p className="text-lg">Feedback về website</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentProfile;
