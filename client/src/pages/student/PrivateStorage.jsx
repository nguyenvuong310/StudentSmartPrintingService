import { useState, useEffect } from "react";
import BuyPageModal from "../../components/BuyPageModal";
import StudentFileCard from "../../components/StudentFileCard"
import PagiBar from "../../components/PaginationBar"
import Footer from "../../components/Footer"
import { getDocByUserid, getPrivateDocBySearch } from "../../service/userService";
import UploadModal from "../../components/UploadModal";
import { input } from "@material-tailwind/react";
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
    return (
        <>
            <div className="flex h-[40rem] p-5 flex-col items-center bg-white-fill">
                <div class="grid grid-cols-4 gap-[4rem] mt-2">
                    {listdoc && listdoc.map((doc, index) => {
                        return (
                            < StudentFileCard
                                doc={doc}
                                numpPage={props.user.numpage - props.user.numpageused}
                                textFile={doc.name} textSubject={doc.course}
                                textType={'.pdf'}
                                fileLink={"https://drive.google.com/file/d/" + doc.link + "/view"}
                                filetoDown={"https://drive.google.com/u/0/uc?id=" + doc.link + "&export=download"}
                                filetoPrint={"https://drive.google.com/file/d/" + doc.link + "/preview"} />
                        )

                    })}
                    {/* <PagiBar /> */}
                </div>
            </div>

            <Footer />

        </>
    );
};

export default PrivateStorage;