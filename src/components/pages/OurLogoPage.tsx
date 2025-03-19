import fbislogo from "../../assets/images/fbislogo.png"
import { motion } from "framer-motion";
import { containerVariants } from "../../utils/switch";

const OurLogoPage = () => {
    return (
        <motion.div className="w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1 className="text-black text-lg uppercase font-medium">Our FBIS Logo</h1>
            <div className="flex flex-col justify-center items-center md:justify-start md:items-start md:flex-row mt-5 space-x-7">
                <img src={fbislogo} alt="" className="w-[300px] h-fit mx-auto" />
                <div className="welcome text-justify">
                    <ul className="space-y-4">
                        <li className="bg-white p-4 rounded-lg shadow hover:bg-blue-50 transition">
                        អក្សរ FBIS នៅចំកណ្តាល គឺជាអក្សរកាត់នៃឈ្មោះសាលា Future Bright International School ដែលសំដៅយកសិស្សានុសិស្សដែលបានសិក្សា
                        នៅសាលា អន្តរជាតិក្យូឆឺរប្រាយ មានអនាគតល្អ(ពុទ្ធិ ឥរិយាបថ ឧត្តមភាព និងសង្គម)
                        </li>
                        <li className="bg-white p-4 rounded-lg shadow hover:bg-blue-50 transition">
                        រូបមួក តំណាងឱ្យការសិក្សា និងការស្រាវជ្រាវ ប្រកបដោយគុណភាពអប់រំខ្ពស់ និងបញ្ចប់ការសិក្សាថ្នាក់ចំណេះទូទៅហើយទទួលសញ្ញាបត្រក្នុងកម្មវិធី
                        ដែលរៀបចំដោយសាលា ដែលមានការញ្ជើញចូលរួមពីគណៈអធិបតីមកពីបណ្តាអង្គភាពជាតិ គណៈគ្រប់គ្រង បុគ្គលិកលោកគ្រូអ្នកគ្រូ សិស្សានុសិស្ស 
                        អ្នកអាណាព្យាបាល អ្នកសាព័ត៌មាន ក៏ដូចជាភ្ញៀវជាតិ និងអន្តរជាតិយ៉ាងច្រើនកុះករ នឹងមានសមត្ថភាពខ្ពស់ក្នុងការសិក្សាថ្នាក់ឧត្តមសិក្សាក្នុងនិង
                        ក្រៅប្រទេស ធ្វើការងារ រស់នៅក្នុងយុគសម័យសកលភាវូបនីយ៍កម្ម និងសង្គមពុទ្ធិ
                        </li>
                        <li className="bg-white p-4 rounded-lg shadow hover:bg-blue-50 transition">
                        រូបផែនដី តំណាងឱ្យវិសាលភាពដ៏ធំទូលាយរបស់សាលា អន្តរជាតិក្យូឆឺរប្រាយ
                        </li>
                        <li className="bg-white p-4 rounded-lg shadow hover:bg-blue-50 transition">
                        រូបកង់ស្ពឺពណ៌ក្រហម តំណាងឱ្យភាពស៊ីសង្វាក់គ្នា ការសហការយ៉ាងស្អិតរមួតជាមួយដៃគូទាំងក្នុងនិងក្រៅប្រទេស
                        </li>
                        <li className="bg-white p-4 rounded-lg shadow hover:bg-blue-50 transition">
                        អក្សរក្នុងបូពណ៌ក្រហមខាងក្រោម៖
                            <ul className="mt-2 space-y-2 pl-6 border-l-4 border-blue-500">
                                <li className="bg-gray-50 p-3 rounded-lg">
                                ពុទ្ធិ (Knowledge and Skills) តំណាងឱ្យមានជំនាញផ្នែករឹង មានជំនាញផ្នែកទន់ មាន ចំណេះដឹងទូលំទូលាយ ចេះច្នៃប្រតិដ្ឋ និងការបង្កើតគំនិតថ្មី និងមានទំនុកចិត្តលើខ្លួនឯង។
                                </li>
                                <li className="bg-gray-50 p-3 rounded-lg">
                                គុណភាព
                                </li>
                                <li className="bg-gray-50 p-3 rounded-lg">
                                ឧត្តមភាព (Excellence) តំណាងឱ្យមានគុណភាពបង្រៀន មានគុណភាពសិក្សា មានគុណភាពស្រាវជ្រាវ និងមានគុណភាពការងារ-ភាពជោគជ័យ ។
                                </li>
                                <li className="bg-gray-50 p-3 rounded-lg">
                                សង្គម (Society) តំណាងឱ្យចេះរស់នៅក្នុងសហគមន៍-សង្គម ចូលរួមសកម្មភាពសង្គមស្រលាញ់-ថែរក្សាវប្បធម៌ជាតិ និងស្រលាញ់-ថែរក្សាបរិស្ថាន ។
                                </li>
                            </ul>
                        </li>
                        <li className="bg-white p-4 rounded-lg shadow hover:bg-blue-50 transition">
                        ក្បាច់ភ្លឺខ្មែរ តំណាងឱ្យប្រទេសកម្ពុជាជាប្រទេសដែលមានវប្បធម៌អរីយធម៌ដ៏ចំណាស់ និងរុងរឿងនៅក្នុងតំបន់អាស៊ី
                        </li>
                        <li className="bg-white p-4 rounded-lg shadow hover:bg-blue-50 transition">
                        រូបគួរស្រូវព័ទ្ធជុំវិញ តំណាងឱ្យប្រទេសកម្ពុជា គឺជាប្រទេសកសិកម្ម ដែលប្រជាជនភាគច្រើនគឺប្រកបរបរកសិកម្មដើម្បីចឹញ្ចឹមជីវិត និងមានឈ្មោះសាលាព័ទ្ធ
ជុំវិញជាភាសាជាតិ និងអន្តរជាតិរំលេចទៅដោយស៊ុមពណ៌ក្រហម។
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default OurLogoPage;
