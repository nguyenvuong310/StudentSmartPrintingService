
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import FolderCard from "../../components/StudentFolderCard"
import StudentFolderCard from "../../components/StudentFolderCard";
import FolderImg from "../../assets/folderimg.png";
import PagiBar from "../../components/PaginationBar"
import { getUserInfo, getListCourse } from "../../service/userService";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";
import StudentProfile from "./StudentProfile";
import PublicStorage from "./PublicStorage";
import PrivateStorage from "./PrivateStorage";
import PrintingPage from "./PrintingPage";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";


const TabsDefault = () => {
    const data = [
        {
            label: "HTML",
            value: "html",
            desc:
                <>
                    <PublicStorage />,
                </>
        },
        {
            label: "React",
            value: "react",
            desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Vue",
            value: "vue",
            desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
        },
        {
            label: "Angular",
            value: "angular",
            desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Svelte",
            value: "svelte",
            desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
        },
    ];

    return (
        <Tabs value="html">

            <TabsHeader className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                    className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}>
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
};
export default TabsDefault;