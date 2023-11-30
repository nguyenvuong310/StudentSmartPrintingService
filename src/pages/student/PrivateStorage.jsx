import { useState, useEffect } from "react";
import BuyPageModal from "../../components/BuyPageModal";
import StudentFileCard from "../../components/StudentFileCard"
import PagiBar from "../../components/PaginationBar"
import Footer from "../../components/Footer"

const PrivateStorage = () => {
    const text = 'Công nghệ phần mềm'
    const text1 = "Đề thi cuối kì 231"
    const text2 = ".pdf"
    return (
        <>
            <div className="flex h-[40rem] p-5 flex-col items-center bg-white-fill">
                <div class="grid grid-cols-4 gap-[4rem] mt-2">
                    <StudentFileCard textFile={text1} textSubject={text} textType={text2} />
                    <StudentFileCard textFile={text1} textSubject={text} textType={text2} />
                    <StudentFileCard textFile={text1} textSubject={text} textType={text2} />
                    <StudentFileCard textFile={text1} textSubject={text} textType={text2} />
                    <StudentFileCard textFile={text1} textSubject={text} textType={text2} />
                    <StudentFileCard textFile={text1} textSubject={text} textType={text2} />
                    <StudentFileCard textFile={text1} textSubject={text} textType={text2} />
                    <StudentFileCard textFile={text1} textSubject={text} textType={text2} />
                    <PagiBar />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PrivateStorage;