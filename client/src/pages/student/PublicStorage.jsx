import { useState, useEffect } from "react";
import BuyPageModal from "../../components/BuyPageModal";
import StudentFolderCard from "../../components/StudentFolderCard";
import PagiBar from "../../components/PaginationBar"
import Footer from "../../components/Footer"
import { getListCourse } from "../../service/userService";
const PublicStorage = (props) => {
    const [listCourse, setListCourse] = useState([])
    const [pagenum, setPagenum] = useState(1);
    useEffect(() => {
        const getdata = async () => {
            const course = await getListCourse();
            await setListCourse(course.data.course)
        }
        getdata()
    }, [pagenum]);
    const handleOnChangePagenum = (data) => {
        setPagenum(() => data)
    }
    const handleOpen = (data, course) => {
        props.course(course)
        props.input(data)

    }
    return (
        <>

            <div className="flex min-h-[40rem] p-5 flex-col items-center gap-4  self-center w-[85%] bg-[#E3E3E3] mt-5 rounded-xl">
                <div class="grid flex-1 mt-[2rem] smLarge:grid-cols-3 smLarge:gap-y-0 gap-y-[2rem] smMd:grid-cols-2 gap-x-[4rem] gap mt-2">
                    {listCourse && pagenum == 1 && listCourse.slice(0, 9).map((course, index) => (
                        <div onClick={() => handleOpen(5, course.name)}>
                            <StudentFolderCard text={course.name} />
                        </div>
                    ))}
                    {listCourse && pagenum == 2 && listCourse.slice(9, 18).map((course, index) => (
                        <div onClick={() => handleOpen(5, course.name)}>
                            <StudentFolderCard text={course.name} />
                        </div>
                    ))}
                    {listCourse && pagenum == 3 && listCourse.slice(18, 30).map((course, index) => (
                        <div onClick={() => handleOpen(5, course.name)}>
                            <StudentFolderCard text={course.name} />
                        </div>
                    ))}
                </div>

                <PagiBar input={handleOnChangePagenum} value={pagenum} />
            </div>
            <div class="pt-10">
                <Footer />

            </div>
        </>
    );
};

export default PublicStorage;