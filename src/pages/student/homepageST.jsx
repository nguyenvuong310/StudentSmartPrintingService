import HeaderStudent from "./HeaderStudent";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import FolderCard from "../../components/StudentFolderCard"
import StudentFolderCard from "../../components/StudentFolderCard";
import FolderImg from "../../assets/folderimg.png"
import { getUser } from "../../service/userService";
import PagiBar from "../../components/PaginationBar"

const HomePageStudent = () => {
  const text = 'Công nghệ phần mềm';
  return (
    <>
      <HeaderStudent />
      <div className="flex h-[40rem] p-5 flex-col items-center bg-white-fill">
        <div class="grid grid-cols-3 gap-[4rem] mt-2">
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
        <PagiBar />
      </div >

      <Footer />
    </>
  );
};

export default HomePageStudent;