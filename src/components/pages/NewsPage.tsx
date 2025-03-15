import newsvuthy from "../../assets/images/newsvuthy.png"
import newsteacher from "../../assets/images/newsteacher.png"
import { Dot } from "lucide-react";

const NewsPage = () => {
    return (
        <div className="w-full space-y-5">
            <div className="flex flex-col md:flex-row shadow-md rounded-lg px-3 py-2 gap-y-3 md:gap-x-3 md:gap-y-0">
                <img src={newsvuthy} alt="" className="object-cover rounded-lg" />
                <div className="flex flex-col justify-between px-2">
                    <div>
                        <p className="text-gray-400 text-sm mb-5 mt-3">Jan 15, 2025</p>
                        <h1 className="text-lg mb-3">The management, guardians and students who achieved Grade A</h1>
                        <hr />
                        <p className="text-gray-400 text-sm mb-5 mt-3">The management, guardians and students who achieved Grade A (19) of Future Bright International School 
    attended the ceremony to congratulate and award motorbikes to 221 students who achieved Grade A in the 
    Siem Reap Province Secondary School Examination results, October 8, 2024, under the chairmanship of His 
    Royal Highness Prince Tea Banh, Supreme Personal Advisor to His Majesty the King of Cambodia.  Saturday, 13th Kert, Moon, Year of the Monkey, Buddhist Era 2568 Corresponding to January 11, 2025</p>
                    </div>
                    <p className="text-gray-400 text-sm">Academic Program</p>
                </div>
            </div>
            <h1 className="text-black text-lg uppercase font-bold">Teacher</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {Array.from({length: 5}).map((_, index) => (
                    <div className="flex flex-col justify-between shadow-md rounded-lg p-1 space-y-2" key={index}>
                        <img src={newsteacher} alt="" />
                        <div className="flex flex-col space-y-1">
                            <h1>Life Skills Program</h1>
                            <p className="text-sm text-justify">Cooking Pork Noodle Soup for Grade 6A students of Future Bright International School, Branch 1.</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="text-purple-600 text-[12px]">Academic Program</p>
                            <Dot size={30} className="text-red-600" />
                            <p className="text-gray-400 text-[12px]">Jan 10, 2025</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsPage;
