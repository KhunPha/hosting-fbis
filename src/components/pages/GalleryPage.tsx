import { useState } from "react";
import StudyTab from "../StudyTab";
import ExamTab from "../ExamTab";

const GalleryPage = () => {
    const [tab, setTab] = useState("tab1")

    const handleTab = (tab: any) => {
        setTab(tab);
    }

    return (
        <div className="w-full">
            <h1 className="text-purple-600 text-2xl uppercase font-bold mt-6 text-center">Future Bright International School Memorial Photo Gallery</h1>
            <div className="w-full flex items-center justify-center mt-3">
                <div className="w-[250px] h-[2px] bg-red-600">
                </div>
            </div>
            <div className="flex flex-row space-x-5 mt-7 justify-center md:justify-start">
                <button className="flex flex-col text-center cursor-pointer" onClick={() => handleTab("tab1")}>
                    <div className="flex flex-row space-x-3 items-center">
                        <h1 className={`${tab === "tab1" ? "text-black" : "text-gray-400"} font-bold text-[14px] sm:text-[16px] md:text-lg`}>Student Study</h1>
                        <p className="px-5 bg-gray-300 rounded-lg">12</p>
                    </div>
                    <div className={`${tab === "tab1" ? "flex" : "hidden"} w-[70%] h-[2px] bg-purple-600 mt-1 mx-auto`}>
                    </div>
                </button>
                <button className="flex flex-col text-center cursor-pointer" onClick={() => handleTab("tab2")}>
                    <div className="flex flex-row space-x-3 items-center">
                        <h1 className={`${tab === "tab2" ? "text-black" : "text-gray-400"} font-bold text-[14px] sm:text-[16px] md:text-lg`}>Student Exam</h1>
                        <p className="px-5 bg-gray-300 rounded-lg">12</p>
                    </div>
                    <div className={`${tab === "tab2" ? "flex" : "hidden"} w-[70%] h-[2px] bg-purple-600 mt-1 mx-auto`}>
                    </div>
                </button>
            </div>
            <div className="flex flex-col mt-6 items-center">
                {tab === "tab1" ? <StudyTab /> : <ExamTab />}
            </div>
        </div>
    )
}

export default GalleryPage;