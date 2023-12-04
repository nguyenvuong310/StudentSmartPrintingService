import { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import React from 'react'
import BuyPageModal from "../../components/BuyPageModal";
import StudentFileCard from "../../components/StudentFileCard"
import PagiBar from "../../components/PaginationBar"
import Footer from "../../components/Footer"
import { getDocBySearchPublic, getDocBySearchName, getListCourse } from "../../service/userService";
import UploadModal from "../../components/UploadModal";


import {
    Button, IconButton
} from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { propTypeChildren } from "@material-tailwind/react/types/components/timeline";
const FolderView = (props) => {
    const [listDoc, setlistDoc] = useState([])
    const [course, setCourse] = useState("")
    useEffect(() => {
        const test = async () => {
            if (props.search == 5) {
                const data = {
                    content: props.content,
                    course: course
                }
                console.log(data)
                const list = await getDocBySearchName(data)
                setlistDoc(list.data.doc)
                setCourse(course)
            }
            if (props.search == 2) {
                const data = {
                    content: props.content,
                    // course: props.course
                }
                const list = await getDocBySearchPublic(data)
                // console.log("check: ", list)
                setlistDoc(list.data.doc)
                // if (list && list.data && list.data.doc && list.data.doc.length > 0) { setCourse(props.content) }
                const course = await getListCourse();
                for (let i = 0; i < 27; i++) {
                    // console.log(course.data.course[i].name.toLowerCase() + " va " + props.content)
                    const string1 = course.data.course[i].name.toLowerCase().trim();
                    const string2 = props.content.trim().toLowerCase();
                    if (string1 == string2) {
                        setCourse(course.data.course[i].name)
                        return
                    }
                }
            }
            if (props.search == 1) {
                const data = {
                    content: props.course,
                }
                const list = await getDocBySearchPublic(data)
                setlistDoc(list.data.doc)
                setCourse(props.course)
            }

        }
        test()
    }, [props.search, props.content, props.upload]);




    const pageIndex = listDoc.filter((value, index) => (
        index % 10 === 0
    ))


    const [active, setActive] = React.useState(1);
    useEffect(() => {
        const test = async () => {
            // console.log(listDoc)
            handleIndex(1)

        };

        test()
    }, [listDoc]);

    const handleIndex = (index) => {
        setActive(index)
        const root = ReactDOM.createRoot(
            document.getElementById('storage')
        );
        const element = (
            <div class="grid md:grid-cols-5 grid-cols-2 grid-flow-row  gap-x-[4rem] gap-y-[2rem] p-10">
                {listDoc && listDoc.slice((index - 1) * 10, (index * 10)).map((doc, index) =>
                (
                    < StudentFileCard
                        doc={doc}
                        textFile={doc.name} textSubject={doc.course}
                        textType={'.pdf'}
                        fileLink={"https://drive.google.com/file/d/" + doc.link + "/view"}
                        filetoDown={"https://drive.google.com/u/0/uc?id=" + doc.link + "&export=download"}
                        filetoPrint={"https://drive.google.com/file/d/" + doc.link + "/preview"} />
                ))}
            </div>
        )

        root.render(element);
    }

    const getItemProps = (index) =>
    ({
        className: active === index ? "bg-blue-400 text-white" : "bg-white text-gray-900",
        onClick: () => {
            handleIndex(index)
        }
    });

    const listButton = pageIndex.map((pageIndex, index) => (
        <>
            <IconButton className=""
                {...getItemProps(index + 1)}>
                {index + 1}
            </IconButton>
        </>
    ))
    const frameNum = pageIndex.length

    const next = () => {
        if (active === frameNum) return;
        handleIndex(active + 1)
    };
    const prev = () => {
        if (active === 1) return;
        handleIndex(active - 1)
    };

    const backtoCourse = async (course) => {
        if (course) {
            const data = {
                content: course,
            }
            const list = await getDocBySearchPublic(data)
            setlistDoc(list.data.doc)
        }
    }
    return (
        <>
            <div className="flex  flex-col min-h-[770px] w-[90%] self-center bg-blue-200 mt-5 rounded-xl">
                <div class="flex sticky top-0 z-10 bg-[#678CF8] items-start p-3 border-b border-solid  rounded-t">
                    <button onClick={() => backtoCourse(course)} class="text-gray-900 text-xl font-semibold">
                        {course ? course : "Không có thông tin"}
                    </button>
                </div>
                <div id="storage" class=" flex flex-1 w-fit self-center justify-center">

                </div>
                <div className="flex justify-center gap-4 pt-3 pb-2">
                    <Button
                        variant="text"
                        className="flex items-center gap-2 "
                        onClick={prev}
                        disabled={active === 1}
                    >
                        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Trước
                    </Button>
                    <div className="flex items-center  gap-2">
                        {listButton}
                    </div>
                    <Button
                        variant="text"
                        className="flex items-center gap-2"
                        onClick={next}
                        disabled={active === frameNum || frameNum === 0}
                    >
                        Sau
                        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                    </Button>
                </div>

            </div>
            <div class="pt-10">
                <Footer />

            </div>

        </>
    );
};

export default FolderView;