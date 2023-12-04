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
            <div className="flex h-[40rem] p-5 flex-col items-center bg-white-fill">
                <div class="grid grid-cols-3 gap-[4rem] mt-2">
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
            <Footer />
        </>
    );
};

export default PublicStorage;