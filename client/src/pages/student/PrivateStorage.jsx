import { useState, useEffect } from "react";
import React from 'react'
import BuyPageModal from "../../components/BuyPageModal";
import StudentFileCard from "../../components/StudentFileCard"
import PagiBar from "../../components/PaginationBar"
import Footer from "../../components/Footer"
import { getDocByUserid } from "../../service/userService";
import UploadModal from "../../components/UploadModal";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { list } from "postcss";
const PrivateStorage = (props) => {
    const [listdoc, setListdoc] = useState([])
    useEffect(() => {
        const test = async () => {
            try {
                const data = {
                    userid: props.user.userid
                }
                const doc = await getDocByUserid(data);
                setListdoc(doc.data.doc)
            } catch (error) {
                console.error("Error fetching user information:", error);
            }
        };

        test()
    }, []);

    const data = []

    const docList = listdoc.map((doc, index) =>
    (
        <React.Fragment >
            < StudentFileCard
                doc={doc}
                numpPage={props.user.numpage}
                textFile={doc.name} textSubject={doc.course}
                textType={'.pdf'}
                fileLink={"https://drive.google.com/file/d/" + doc.link + "/view"}
                filetoDown={"https://drive.google.com/u/0/uc?id=" + doc.link + "&export=download"}
                filetoPrint={"https://drive.google.com/file/d/" + doc.link + "/preview"} />
        </React.Fragment >
    ))

    const chunkSize = 6
    for (let i = 0; i < docList.length; i += chunkSize) {
        let index = i / 6 + 1
        const chunk = docList.slice(i, i + chunkSize);
        data.push({
            label: index.toString(),
            value: index.toString(),
            desc: chunk
        })
    }

    const renderFileList = () => {
        return (
            <Tabs value="1">
                <TabsHeader className="bg-transparent w-[40rem]"
                    indicatorProps={{
                        className: "bg-gray-900/10 shadow-none !text-gray-900",
                    }}>
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value}>
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>

                    {data.map(({ value, desc }) => (

                        <TabPanel class="" key={value} value={value}>
                            <div class="grid grid-cols-4 gap-[4rem] mt-2 p-10">
                                {desc}

                            </div>

                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        )
    };



    return (
        <>

            <div className="flex h-[40rem] p-5 flex-col items-center h-screen bg-white-fill">
                {renderFileList()}

                {/* </div> */}
            </div>

            <Footer />

        </>
    );
};

export default PrivateStorage;