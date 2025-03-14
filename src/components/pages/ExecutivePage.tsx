import vuthy from "../../assets/images/vuthy.png";
import samath from "../../assets/images/oh_samath.png";
import { useEffect, useState } from "react";
import ShowDetailsExe from "../ShowDetailsExe";

const ExecutivePage = () => {
    const [details, setDetails] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);  // <-- Use state

    useEffect(() => {
        document.body.style.overflow = details ? "hidden" : "auto";
    }, [details]);

    const handleDetail = (index: number | null) => {
        setSelectedIndex(index);   // <-- Store index in state
        setDetails(index !== null);  // <-- Open modal only if index is valid
    };

    return (
        <div className="w-full relative">
            <h1 className="text-black text-lg uppercase font-medium">Executive Committee</h1>

            {/* Top Management */}
            <div className="flex flex-col p-2">
                <h3 className="text-center mt-5 font-bold">Top Management</h3>
                <div className="flex justify-center mt-2 mb-5">
                    <div className="w-30 h-[2px] bg-purple-600"></div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mx-auto gap-x-4">
                    {Array.from({ length: 7 }).map((_, index) => (
                        <div className="h-[220px] w-[150px] relative cursor-pointer" key={index} onClick={() => handleDetail(index)}>
                            <img src={vuthy} alt="" className="object-cover"/>
                            <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 bg-white/70 px-2 py-1 w-[140px] h-[50px] text-center flex flex-col items-center justify-center rounded-md space-y-1">
                                <h3 className="text-[14px] font-medium break-words leading-tight">Mr. MANN VUTHY</h3>
                                <h3 className="text-[12px] font-medium break-words leading-tight">Director</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Top Staff */}
            <div className="flex flex-col p-2">
                <h3 className="text-center mt-5 font-bold">Operations Staff</h3>
                <div className="flex justify-center mt-2 mb-5">
                    <div className="w-30 h-[2px] bg-purple-600"></div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mx-auto gap-x-4">
                    {Array.from({ length: 7 }).map((_, index) => (
                        <div className="h-[220px] w-[150px] relative cursor-pointer" key={index} onClick={() => handleDetail(index)}>
                            <img src={samath} alt="" className="object-cover"/>
                            <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 bg-white/70 px-2 py-1 w-[140px] h-[50px] text-center flex flex-col items-center justify-center rounded-md space-y-1">
                                <h3 className="text-[14px] font-medium break-words leading-tight">Mr. OH SAM ATH</h3>
                                <h3 className="text-[13px] font-medium break-words leading-tight">HR</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Show Details */}
            {details && selectedIndex !== null && (
                <div className="fixed w-screen h-screen bg-black/50 top-0 left-0 shadow-lg mx-auto justify-center items-center flex z-[999]" onClick={() => handleDetail(null)}>
                    <ShowDetailsExe index={selectedIndex} key={selectedIndex} />
                </div>
            )}
        </div>
    );
};

export default ExecutivePage;