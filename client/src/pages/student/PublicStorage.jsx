import { useState, useEffect } from "react";
import BuyPageModal from "../../components/BuyPageModal";
import StudentFolderCard from "../../components/StudentFolderCard";
import PagiBar from "../../components/PaginationBar"
import Footer from "../../components/Footer"
import { getListCourse } from "../../service/userService";
const PublicStorage = () => {
    const [listCourse, setListCourse] = useState([])
    useEffect(() => {
        const getdata = async () => {
            const course = await getListCourse();
            await setListCourse(course.data.course)
        }
        getdata()
    }, []);
    return (
        <>
            <div className="flex h-[40rem] p-5 flex-col items-center bg-white-fill">
                <div class="grid grid-cols-3 gap-[4rem] mt-2">
                    {listCourse && listCourse.slice(0, 10).map((course, index) => (
                        <StudentFolderCard text={course.name} />
                    ))}
                    {/* {listCourse && listCourse.from({ length: 8 }, (_, index) => (
                        <StudentFolderCard key={index} text={`Course ${index + 1}`} />
                    ))} */}
                </div>
                {/* <PagiBar /> */}
            </div>
            <Footer />
        </>
    );
};

export default PublicStorage;