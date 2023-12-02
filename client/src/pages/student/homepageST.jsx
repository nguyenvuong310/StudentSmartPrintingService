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
  const [searchlocation, setSearchlocation] = useState(1)
  const [content, setContent] = useState("")
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
  }, []);

  const handleOnChangeCheck = (data) => {
    setCheck(() => data)
  }
  const handleOnChangeSearchLocation = (data) => {
    setSearchlocation(() => data)
  }
  const handleChangeContent = (data) => {
    setContent(() => data)
  }
  return (
    <>
      <HeaderStudent input={handleOnChangeCheck} value={check}
        inputsearch={handleOnChangeSearchLocation} search={searchlocation}
        inputcontent={handleChangeContent} content={content} />
      {check == 1 && <PublicStorage />}
      {check == 2 && <PrivateStorage user={userinfo} check={check} search={searchlocation} inputsearch={handleOnChangeSearchLocation} content={content} />}
      {check == 3 && <StudentProfile />}
    </>
  );
};
export default HomePageStudent;
