import { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import React from 'react'
import BuyPageModal from "../../components/BuyPageModal";
import StudentFileCard from "../../components/StudentFileCard"
import PagiBar from "../../components/PaginationBar"
import Footer from "../../components/Footer"
import { getDocByUserid, getPrivateDocBySearch } from "../../service/userService";
import UploadModal from "../../components/UploadModal";
import { List, input } from "@material-tailwind/react";
import {
    Button, IconButton
} from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const PrivateStorage = (props) => {
    const [listdoc, setListdoc] = useState([])
    useEffect(() => {
        const test = async () => {
            try {
                if (props.search == 1) {
                    const doc = await getDocByUserid(props.user.userid);
                    setListdoc(doc.data.doc)
                }
                if (props.search == 3) {
                    console.log(props.content)
                    const data = {
                        userid: props.user.userid,
                        content: props.content,
                        location: "private",
                    }
                    const doc = await getPrivateDocBySearch(data);
                    setListdoc(doc.data.doc)
                }

            } catch (error) {
                console.error("Error fetching user information:", error);
            }
        };

        test()
    }, [props.content, props.search, props.upload]);
    const pageIndex = listdoc.filter((value, index) => (
        index % 10 === 0
    ))


    const [active, setActive] = React.useState(1);
    useEffect(() => {
        const test = async () => {
            // console.log(listdoc)
            handleIndex(1)

        };

        test()
    }, [listdoc]);

    const handleIndex = (index) => {
        setActive(index)
        const root = ReactDOM.createRoot(
            document.getElementById('storage')
        );
        const element = (
            <div class="grid md:grid-cols-5 grid-cols-2 grid-flow-row  gap-x-[4rem] gap-y-[2rem] p-10">
                {listdoc && listdoc.slice((index - 1) * 10, (index * 10)).map((doc, index) =>
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

    return (
        <>
            <div className="flex  flex-col min-h-[770px] w-[90%] self-center bg-blue-200 mt-5 rounded-xl">
                <div class="flex sticky top-0 z-10 bg-[#678CF8] items-start p-3 border-b border-solid  rounded-t">
                    <h3 class="text-gray-900 text-xl font-semibold">
                        Kho lưu trữ cá nhân
                    </h3>
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

export default PrivateStorage;