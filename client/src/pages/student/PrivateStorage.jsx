import { useState, useEffect } from "react";
import React from 'react'
import BuyPageModal from "../../components/BuyPageModal";
import StudentFileCard from "../../components/StudentFileCard"
import PagiBar from "../../components/PaginationBar"
import Footer from "../../components/Footer"
import { getDocByUserid, getPrivateDocBySearch } from "../../service/userService";
import UploadModal from "../../components/UploadModal";

// import TabsDefault from "./test";
import {
    input,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

const PrivateStorage = (props) => {
    const [listdoc, setListdoc] = useState([])
    useEffect(() => {
        const test = async () => {
            try {
                if (props.search == 1) {
                    const data = {
                        userid: props.user.userid,

                    }
                    const doc = await getDocByUserid(data);
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

    const data = []

    const docList = listdoc.map((doc, index) =>
    (
        < StudentFileCard
            doc={doc}
            numpPage={props.user.numpage}
            textFile={doc.name} textSubject={doc.course}
            textType={'.pdf'}
            fileLink={"https://drive.google.com/file/d/" + doc.link + "/view"}
            filetoDown={"https://drive.google.com/u/0/uc?id=" + doc.link + "&export=download"}
            filetoPrint={"https://drive.google.com/file/d/" + doc.link + "/preview"} />
    ))

    const chunkSize = 8
    for (let i = 0; i < docList.length; i += chunkSize) {
        let index = i / 8 + 1
        const chunk = docList.slice(i, i + chunkSize);
        data.push({
            label: index.toString(),
            value: index.toString(),
            desc: chunk
        })
    }

    const renderFileList = () => {
        return (
            <>
                {/* <div class="grid items-center"> */}
                <Tabs value="1" class="">
                    <TabsBody
                        animate={{
                            initial: { x: 0, y: 0 },
                            mount: { x: 0, y: 0 },
                            unmount: { y: 0 },
                        }}
                        className="h-[620px] bg-blue-500">
                        {data.map(({ value, desc }) => (
                            <TabPanel class=" " key={value} value={value}>
                                <div class="grid grid-cols-4 gap-x-[2rem] gap-y-12">
                                    {desc}
                                </div>
                            </TabPanel>
                        ))}
                    </TabsBody >
                    <div class="flex justify-center">
                        <TabsHeader className="bg-transparent duration-0"
                            indicatorProps={{
                                className: "bg-blue-400 shadow-none !text-gray-900 ",
                            }}>
                            <div class=" self-center flex">
                                <Tab key={'before'} value={'before'} >
                                    <div>
                                        {'before'}
                                    </div>
                                </Tab>
                                {data.map(({ label, value }) => (
                                    <div class=" w-10 z-0">
                                        <Tab key={value} value={value} >
                                            <div>
                                                {label}
                                            </div>
                                        </Tab>
                                    </div>
                                ))}
                                <Tab key={'after'} value={'after'} >
                                    <div>
                                        {'after'}
                                    </div>
                                </Tab>

                            </div>

                        </TabsHeader>
                    </div>
                </Tabs >
            </>
        )
    };
    return (
        <>

            <div className="flex flex-col  h-screen w-screen bg-white-fill">
                <div class=" flex h-screen justify-center">
                    {renderFileList()}
                </div>



                {/* <div class="h-[90%] w-[90%] bg-red-100 self-center"> */}
                {/* <div>
                        {listdoc && listdoc.map((doc, index) =>
                        (
                            < StudentFileCard
                                doc={doc}
                                numpPage={props.user.numpage}
                                textFile={doc.name} textSubject={doc.course}
                                textType={'.pdf'}
                                fileLink={"https://drive.google.com/file/d/" + doc.link + "/view"}
                                filetoDown={"https://drive.google.com/u/0/uc?id=" + doc.link + "&export=download"}
                                filetoPrint={"https://drive.google.com/file/d/" + doc.link + "/preview"} />
                        ))}
                    </div> */}
                {/* </div> */}


                {/* <TabsDefault /> */}
                <Footer />

            </div>



        </>
    );
};

export default PrivateStorage;