import slideshow from "../assets/images/slideshow.png"
import mee1 from "../assets/images/mee1.png"
import mee2 from "../assets/images/mee2.png"
import student from "../assets/images/student.png"
import { Play, TrendingUp } from "lucide-react"
import video from "../assets/video.mp4"
import { useRef, useState } from "react"

const Content = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (videoRef.current) {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="space-y-5">
            <img src={slideshow} alt="" className="w-full" />
            <div className="grid grid-cols-1 space-y-2 items-center lg:grid-cols-2 p-3 bg-purple-600 shadow-md rounded-lg text-white lg:space-x-2">
                <div className="flex flex-col space-y-1">
                    <h1 className="text-lg font-bold">Welcome to Future Bright International School</h1>
                    <p className="text-sm text-justify welcome">សាលា អន្តរជាតិក្យូឆឺរប្រាយសាខាទី១ នៃនាយកដ្ឋានបណ្តុះបណ្តាល ខេត្តសៀមរាប គឺជាគ្រឹះស្ថានសិក្សា ឯកជនត្រូវបានបង្កើតឡើងតាមប្រកាសលេខ១៩៨៩ អយក.ប្រក ចុះថ្ងៃទី៣ ខែកក្កដាឆ្នាំ២០០៩ ដើម្បី 
                    បណ្តុះបណ្តាលកម្មវិធីសិក្សាកម្រិតមត្តេយ្យសិក្សា និងកម្មវិធីសិក្សាចំណេះទូទៅកម្រិតបឋម សិក្សា ប្រកប
                    ដោយ គុណភាពអប់រំដែលមានការទទួលស្គាល់ និងគាំទ្រពីអ្នកសិក្សាក្នុងខេត្តសៀមរាប និងទូទាំង ព្រះរាជាណាចក្រកម្ពុជា ។
                    រយៈពេល១៥ឆ្នាំកន្លងមកនេះសាលា អន្តរជាតិក្យូឆឺរប្រាយសាខាទី១បានបណ្តុះបណ្តាលកម្មវិធីសិក្សាកម្រិត
                    មត្តេយ្យសិក្សា និងកម្មវិធីសិក្សាចំណេះទូទៅកម្រិតបឋមសិក្សាស្របតាមគោលការណ៍ណែនាំរបស់ក្រសួងអប់រំ យុវជន និងកីឡាប្រកបដោយជោគជ័យ។ គណៈគ្រប់គ្រង បុគ្គលិក និង លោកគ្រូ អ្នកគ្រូ នៃសាលា អន្តរជាតិក្យូឆឺរប្រាយសាខាទី១ បានយកចិត្តទុកដាក់ខ្ពស់អនុវត្តផែនការយុទ្ធសាស្ត្ររបស់សាលាបានប្រែក្លាយ
                    គ្រឹះស្ថានសិក្សាមួយនេះ មានកេរ្តិ៍ឈ្មោះល្បីល្បាញនៅក្នុង ព្រះ រាជាណាចក្រកម្ពុជា ជាពិសេសនៅក្រុងសៀមរាប ខេត្តសៀមរាប ដែលមានការទទួលស្គាល់ និងគាំទ្រពីអ្នកសិក្សា ព្រមទាំងស្ថាប័នជាតិ និងទទួលបានសមិទ្ធផល
                    ចម្បងៗជាច្រើន។</p>
                </div>
                <img src={mee1} alt="" className="h-full w-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col lg:flex-row space-y-2 lg:flex-3 p-3 bg-gray-100 rounded-lg shadow-md lg:space-x-2">
                <img src={mee2} alt="" className="flex-1 h-full w-full object-cover rounded-lg" />
                <div className="flex-2 lg:p-5 space-y-2">
                    <h4 className="text-gray-400 font-medium">News</h4>
                    <h2 className="text-balance font-bold">Graduation ceremony for 12th grade students</h2>
                    <hr className="text-gray-400" />
                    <h4 className="text-gray-400 font-medium">Graduation ceremony for 12th grade students at Sokha Hotel, Siem Reap, December 21, 2024.​</h4>
                </div>
            </div>
            <h1 className="text-black text-lg uppercase font-bold">Program</h1>
            <div className="grid grid-cols-1 gap-y-3 sm:gap-x-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col justify-between p-2 bg-gray-100 rounded-lg shadow-md">
                    <img src={student} alt="" className="w-full h-full object-cover" />
                    <div className="flex flex-col mt-2 text-black">
                        <h2 className="text-lg font-bold">Khmer General Education</h2>
                        <p className="text-sm text-justify">Khmer General Education lasts for 15 years ranging from Kindergarten to grade 12. The program offers both full-time and part-time classes. The classes are divided into two shifts. </p>
                    </div>
                    <div className="flex justify-end mt-2 w-full h-full">
                        <button className="border-1 border-purple-600 px-4 py-2 rounded-lg text-purple-600 hover:bg-purple-600 hover:text-white cursor-pointer">View Details</button>
                    </div>
                </div>
                <div className="flex flex-col justify-between p-2 bg-gray-100 rounded-lg shadow-md">
                    <img src={student} alt="" className="w-full h-full object-cover" />
                    <div className="flex flex-col mt-2 text-black">
                        <h2 className="text-lg font-bold">Khmer General Education</h2>
                        <p className="text-sm text-justify">Khmer General Education lasts for 15 years ranging from Kindergarten to grade 12. The program offers both full-time and part-time classes. The classes are divided into two shifts. </p>
                    </div>
                    <div className="flex justify-end mt-2 w-full h-full">
                        <button className="border-1 border-purple-600 px-4 py-2 rounded-lg text-purple-600 hover:bg-purple-600 hover:text-white cursor-pointer">View Details</button>
                    </div>
                </div>
                <div className="flex flex-col justify-between p-2 bg-gray-100 rounded-lg shadow-md">
                    <img src={student} alt="" className="w-full h-full object-cover" />
                    <div className="flex flex-col mt-2 text-black">
                        <h2 className="text-lg font-bold">Khmer General Education</h2>
                        <p className="text-sm text-justify">Khmer General Education lasts for 15 years ranging from Kindergarten to grade 12. The program offers both full-time and part-time classes. The classes are divided into two shifts. </p>
                    </div>
                    <div className="flex justify-end mt-2 w-full h-full">
                        <button className="border-1 border-purple-600 px-4 py-2 rounded-lg text-purple-600 hover:bg-purple-600 hover:text-white cursor-pointer">View Details</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="flex gap-2 border-1 cursor-pointer border-purple-600 text-purple-600 px-5 py-2 rounded-lg hover:bg-purple-600 hover:text-white">
                    View All <TrendingUp />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:items-center bg-white shadow-md p-2 relative">
                {/* Video Container */}
                <div className="relative w-full">
                    <video
                    ref={videoRef}
                    src={video}
                    width="600"
                    onClick={handlePlayPause}
                    className="h-auto w-full object-cover rounded-lg"
                    />
                    
                    {/* Centered Play Button */}
                    {!isPlaying && (
                    <button
                        className="absolute inset-0 flex items-center justify-center bg-opacity-50 rounded-lg"
                        onClick={handlePlayPause}
                    >
                        <div className="bg-white rounded-full p-3 flex items-center justify-center">
                            <Play className="text-black" size={30} />
                        </div>
                    </button>
                    )}
                </div>

                {/* Description Section */}
                <div className="flex flex-col h-full w-full justify-around md:justify-center items-center gap-3 px-3 md:px-8 lg:px-16">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
                    Khmer General Knowledge Program
                    </h1>
                    <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ipsa veniam similique non eveniet totam quam et quidem ut dolore eaque ad perspiciatis, molestiae, adipisci exercitationem optio expedita, quod autem!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Content;