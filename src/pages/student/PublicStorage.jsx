import { useState, useEffect } from "react";
import BuyPageModal from "../../components/BuyPageModal";
import StudentFolderCard from "../../components/StudentFolderCard";
import PagiBar from "../../components/PaginationBar"
import Footer from "../../components/Footer"

const PublicStorage = () => {
    const text = 'Công nghệ phần mềm'
    const text1 = "Đề thi cuối kì 231"
    const text2 = ".pdf"
    return (
        <>
            <div className="flex h-[40rem] p-5 flex-col items-center bg-white-fill">
                <div class="grid grid-cols-3 gap-[4rem] mt-2">
                    <StudentFolderCard text={text} />
                    <StudentFolderCard text={text} />
                    <StudentFolderCard text={text} />
                </div>
                <PagiBar />
            </div>
            <Footer />
        </>
    );
};

export default PublicStorage;