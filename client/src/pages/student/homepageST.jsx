import HeaderStudent from "./HeaderStudent";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import FolderCard from "../../components/StudentFolderCard"
import StudentFolderCard from "../../components/StudentFolderCard";
import FolderImg from "../../assets/folderimg.png";
import PagiBar from "../../components/PaginationBar"
import { getUserInfo, getListCourse } from "../../service/userService";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";
import StudentProfile from "./StudentProfile";
import PublicStorage from "./PublicStorage";
import PrivateStorage from "./PrivateStorage";
import PrintingPage from "./PrintingPage";
const HomePageStudent = () => {
  const [userinfo, setUserinfo] = useState({})
  const [check, setCheck] = useState(1);
  useEffect(() => {
    const test = async () => {
      try {
        const data = await getUserInfo();
        setUserinfo(data.data.user)
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    test()
  }, [check]);

  const handleOnChangeCheck = (data) => {
    setCheck(() => data)
  }

  return (
    <>
      <HeaderStudent input={handleOnChangeCheck} value={check} />
      {check == 1 && <PublicStorage />}
      {check == 2 && <PrivateStorage user={userinfo} />}
      {check == 3 && <StudentProfile />}
      {/* <div class="h-screen">
        <PrintingPage docUrl='https://drive.google.com/file/d/1cyqtTyQLqTV3WePHJKuwjYRhPWainQEG/preview' />
      </div>
      {/* <div>HomePageStudent</div> */}
    </>
  );
};
export default HomePageStudent;
