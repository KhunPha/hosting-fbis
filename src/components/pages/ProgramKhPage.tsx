import { GraduationCap } from "lucide-react";
import studentpro from "../../assets/images/studentpro.png"
import { Partnerships } from "../../utils/utils";

const ProgramKhPage = () => {
    return (
        <div className="w-full">
            <h1 className="text-black text-lg uppercase font-medium">Khmer General Education</h1>
            <div className="flex flex-col mt-5">
                <p className="text-justify mb-7">Future Bright International School is committed to reforming and modernizing Khmer General Education by employing soft skills, life skills, resourceful library, laboratory, STEM and computer sessions which facilitates teaching and learning in the 21st Century Education</p>
                <div className="flex flex-col space-y-3">
                    {Partnerships.map((_, index) => (
                        <div className="grid gap-y-3 sm:grid-cols-2 items-center px-3 py-2 border-1 border-gray rounded-lg" key={index}>
                            <div className="flex flex-row space-x-3">
                                <img src={studentpro} alt=""/>
                                <div className="flex flex-col ">
                                    <div className="flex flex-row space-x-1">
                                        <GraduationCap size={17}/>
                                        <p className="text-[12px]">Khmer General Education</p>
                                    </div>
                                    <p className="mt-3.5">Grade 1</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 h-full">
                                <div className="flex flex-col space-x-1 items-center">
                                    <p className="text-[12px]">Subject Study</p>
                                    <p className="mt-3.5">14 Subjects</p>
                                </div>
                                <div className="flex flex-col space-x-1 items-center">
                                    <p className="text-[12px]">Subject Study</p>
                                    <p className="mt-3.5">14 Subjects</p>
                                </div>
                                <div className="flex flex-col space-x-1 items-center">
                                    <p className="text-[12px]">Subject Study</p>
                                    <p className="mt-3.5">14 Subjects</p>
                                </div>
                                <div className="flex flex-col space-x-1 items-center justify-center">
                                    <button className="border-1 border-purple-600 px-3 py-2 text-sm text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white cursor-pointer">View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgramKhPage;
