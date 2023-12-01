import { useState, useEffect } from "react";
import BuyPageModal from "../../components/BuyPageModal";
import StudentFolderCard from "../../components/StudentFolderCard";
import PagiBar from "../../components/PaginationBar"
import Footer from "../../components/Footer"
import { getListCourse } from "../../service/userService";
const PublicStorage = () => {
    const [listCourse, setListCourse] = useState([])
    const [pagenum, setPagenum] = useState(1);
    useEffect(() => {
        const getdata = async () => {
            const course = await getListCourse();
            await setListCourse(course.data.course)
        }
        getdata()
        console.log('pagenum ', pagenum)
    }, [pagenum]);

    const handleOnChangePagenum = (data) => {
        setPagenum(() => data)
    }

    return (
        <>
            <div className="flex h-[40rem] p-5 flex-col items-center bg-white-fill">
                <div class="grid grid-cols-3 gap-[4rem] mt-2">
                    {listCourse && pagenum == 1 && listCourse.slice(0, 9).map((course, index) => (
                        <StudentFolderCard text={course.name} />
                    ))}
                    {listCourse && pagenum == 2 && listCourse.slice(9, 18).map((course, index) => (
                        <StudentFolderCard text={course.name} />
                    ))}
                    {listCourse && pagenum == 3 && listCourse.slice(18, 30).map((course, index) => (
                        <StudentFolderCard text={course.name} />
                    ))}
                </div>
                <PagiBar input={handleOnChangePagenum} value={pagenum} />
            </div>
            <Footer />
        </>
    );
};

export default PublicStorage;