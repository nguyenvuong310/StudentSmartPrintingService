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
const HomePageStudent = () => {
  const [userinfo, setUserInfo] = useState({});
  // const [listCourse, setListCourse] = useState({})
  useEffect(() => {
    const test = async () => {
      try {
        const data = await getUserInfo();
        setUserInfo(data.data.user)
        // const course = await getListCourse();
        // setListCourse(course.data.course)
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    test()
  }, []);
  return (
    <>
      <HeaderStudent />
      <div className="flex h-[40rem] p-5 flex-col items-center bg-white-fill">
        {/* <div class="grid grid-cols-3 gap-[4rem] mt-2">
          <StudentFolderCard text={text} />
          <StudentFolderCard text={text} />
          <StudentFolderCard text={text} />
          <StudentFolderCard text={text} />
          <StudentFolderCard text={text} />
          <StudentFolderCard text={text} />
          <StudentFolderCard text={text} />
          <StudentFolderCard text={text} />
          <StudentFolderCard text={text} />
        </div>
        <PagiBar /> */}
      </div >
      <Footer />
    </>
  );
};
export default HomePageStudent;
