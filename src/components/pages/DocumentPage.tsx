import { ArrowDownToLine, Eye } from "lucide-react";
import fbislogo from "../../assets/images/fbislogo.png"
import { Partnerships } from "../../utils/utils";
import { motion } from "framer-motion";
import { containerVariants } from "../../utils/switch";

const DocumentPage = () => {
    return (
        <motion.div className="w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1 className="text-black text-lg uppercase font-medium">History FBIS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:gap-x-3 gap-y-5">
                <div className="grid grid-cols-2 px-3">
                    <div className="grid grid-cols-3">
                        <p>No</p>
                        <p>Image</p>
                        <p>Name</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>Description</p>
                    </div>
                </div>
                <div className="md:grid grid-cols-2 px-3 hidden">
                    <div className="grid grid-cols-3">
                        <p>No</p>
                        <p>Image</p>
                        <p>Name</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>Description</p>
                    </div>
                </div>
                {Partnerships.map((_, index) => (
                    <div className="grid grid-cols-1" key={index}>
                        <div className="grid grid-cols-2 border-1 border-black px-3 py-2 rounded-lg items-center h-[70px]">
                            <div className="grid grid-cols-3 my-auto">
                                <p className="my-auto">{index + 1}</p>
                                <img src={fbislogo} alt="" className="w-[40px]" />
                                <p className="my-auto">Name</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p>Description</p>
                                <div className="flex flex-row justify-center gap-x-2">
                                    <Eye className="cursor-pointer"/>
                                    <ArrowDownToLine className="cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default DocumentPage;
