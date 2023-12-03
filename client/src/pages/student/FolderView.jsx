import { useState, useEffect } from "react";
import BuyPageModal from "../../components/BuyPageModal";
import StudentFileCard from "../../components/StudentFileCard"
import PagiBar from "../../components/PaginationBar"
import Footer from "../../components/Footer"
import { getDocBySearchPublic } from "../../service/userService";
import UploadModal from "../../components/UploadModal";
const FolderView = (props) => {
    const [listCourse, setListCourse] = useState([])
    useEffect(() => {
        const test = async () => {
            if (props.search == 2 || props.search == 5) {
                const data = {
                    content: props.content,
                }
                const list = await getDocBySearchPublic(data)
                setListCourse(list.data.doc)
            }
            if (props.search == 1) {
                const data = {
                    content: props.course,
                }
                const list = await getDocBySearchPublic(data)
                setListCourse(list.data.doc)
            }

        }
        test()
    }, [props.search, props.content]);
    return (
        <>
            <div className="flex h-[40rem] p-5 flex-col items-center bg-white-fill">
                <div class="grid grid-cols-4 gap-[4rem] mt-2">

                </div>
            </div>

            <Footer />

        </>
    );
};

export default FolderView;