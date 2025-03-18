import { useState } from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../../utils/switch";

const TuitionPage = () => {
    const [tab, setTab] = useState("tab1")

    const handleTab = (tab: any) => {
        setTab(tab);
    }

    return (
        <motion.div className="w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="flex flex-col md:flex-row items-center">
                <h1 className="text-xl font-bold md:mr-6 mb-6 md:mb-0">Tuition Fee</h1>
                <div className="grid grid-cols-2 p-1 bg-gray-300 rounded-lg gap-1">
                    <button className={`w-full h-full px-3 py-2 ${tab === "tab1" ? "bg-white" : ""} rounded-lg cursor-pointer transition-all duration-300`} onClick={() => handleTab("tab1")}>
                        Khmer General Education
                    </button>
                    <button className={`w-full h-full px-3 py-2 ${tab === "tab2" ? "bg-white" : ""} rounded-lg cursor-pointer transition-all duration-300`} onClick={() => handleTab("tab2")}>
                        English Full Time Young Learner
                    </button>
                </div>
            </div>
            <hr className="mt-10 mb-7"/>

            {/* Tab Grade */}
            <div>

            </div>

            <div className="flex flex-col">
                <div className="grid grid-cols-2 gap-y-6 md:gap-y-0 md:grid-cols-4 shadow-xl px-8 py-2 rounded-2xl md:h-[100px] items-center">
                    <div className="flex flex-col space-y-1">
                        <h2 className="font-bold text-xl">Kendergarten</h2>
                        <p>Tution Fees</p>
                    </div>
                    <div className="flex flex-row justify-center space-x-1">
                        <sup className="top-2 text-[15px] md:text-[18px] font-bold">$</sup>
                        <h1 className="text-2xl md:text-4xl font-bold">830</h1>
                        <p className="flex text-[13px] sm:text[14px] items-end md:text-[15px]">Per Year</p>
                    </div>
                    <div className="flex flex-row justify-center space-x-1">
                        <sup className="top-2 text-[15px] md:text-[18px] font-bold">$</sup>
                        <h1 className="text-2xl md:text-4xl font-bold">427</h1>
                        <p className="flex text-[13px] sm:text[14px] items-end md:text-[15px]">Per Semester</p>
                    </div>
                    <div className="flex flex-row justify-center space-x-1">
                        <sup className="top-2 text-[15px] md:text-[18px] font-bold">$</sup>
                        <h1 className="text-2xl md:text-4xl font-bold">214</h1>
                        <p className="flex text-[13px] sm:text[14px] items-end md:text-[15px]">Per Quater</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 mt-10 md:gap-x-5">
                <div className="flex flex-col shadow-md p-5 rounded-lg">
                    <div className="flex flex-row items-center justify-between mb-5">
                        <div className="flex flex-col items-start">
                            <h2 className="font-bold text-xl">Kendergarten</h2>
                            <p>Tution Fees</p>
                        </div>
                        <div className="flex flex-row justify-center space-x-1">
                            <sup className="top-3 text-[18px] font-bold">$</sup>
                            <h1 className="text-4xl font-bold flex items-center">214</h1>
                            <div className="flex flex-col items-center">
                                <p className="text-sm text-purple-600">New student</p>
                                <p className="text-sm">Per Year</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col welcome space-y-2">
                        <p>១.ការចុះឈ្មោះចូលរៀន</p>
                        <p>២.សៀវភៅតាមដាន</p>
                        <p>៣.ឯកសាក្នុងថ្នាក់ និងកិច្ចការផ្ទះ</p>
                        <p>៤.ឯកសារកិច្ចការប្រឡង</p>
                        <p>៥.កាតសិស្ស និងអាណាព្យាបាល</p>
                        <p>៦.ប្រជុំអាណាព្យាបាលប្រចាំឆមាស</p>
                        <p>៧.ឯកសណ្ឋានសិក្សា</p>
                        <p>៨.ឈុតកីឡាអត្តពលកម្មរបស់សិស្សចំណេះទូទៅ</p>
                        <p>៩.សេវាថែទាំនិងអនាម័យ</p>
                    </div>
                </div>

                <div className="flex flex-col shadow-md p-5 rounded-lg">
                    <div className="flex flex-row items-center justify-between mb-5">
                        <div className="flex flex-col items-start">
                            <h2 className="font-bold text-xl">Kendergarten</h2>
                            <p>Tution Fees</p>
                        </div>
                        <div className="flex flex-row justify-center space-x-1">
                            <sup className="top-3 text-[18px] font-bold">$</sup>
                            <h1 className="text-4xl font-bold flex items-center">214</h1>
                            <div className="flex flex-col items-center">
                                <p className="text-sm text-purple-600">New student</p>
                                <p className="text-sm">Per Year</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col welcome space-y-2">
                        <p>១.ការចុះឈ្មោះចូលរៀន</p>
                        <p>២.សៀវភៅតាមដាន</p>
                        <p>៣.ឯកសាក្នុងថ្នាក់ និងកិច្ចការផ្ទះ</p>
                        <p>៤.ឯកសារកិច្ចការប្រឡង</p>
                        <p>៥.កាតសិស្ស និងអាណាព្យាបាល</p>
                        <p>៦.ប្រជុំអាណាព្យាបាលប្រចាំឆមាស</p>
                        <p>៧.ឯកសណ្ឋានសិក្សា</p>
                        <p>៨.ឈុតកីឡាអត្តពលកម្មរបស់សិស្សចំណេះទូទៅ</p>
                        <p>៩.សេវាថែទាំនិងអនាម័យ</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TuitionPage;
