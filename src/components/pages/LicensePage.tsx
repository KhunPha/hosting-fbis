import { motion } from "framer-motion";
import { containerVariants } from "../../utils/switch";

const LicensePage = () => {
    return (
        <motion.div className="w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1 className="text-black text-lg uppercase font-medium">License and Accreditation</h1>
            <div className="flex flex-col mt-5 space-y-5 md:space-y-10">
                <h1 className="welcome text-center w-full text-sm sm:text-xl md:text-2xl lg:text-3xl">សាលា <b>អន្តរជាតិក្យូឆឺរប្រាយ</b> មានការទទួលស្គាល់ដូចខាងក្រោម</h1>
                <h1 className="welcome w-full text-sm sm:text-xl md:text-2xl lg:text-3xl">សាលា <b>អន្តរជាតិក្យូឆឺរប្រាយ</b> មានការទទួលស្គាល់ដូចខាងក្រោម</h1>
                <h1 className="welcome w-full text-sm sm:text-xl md:text-2xl lg:text-3xl">សាលា <b>អន្តរជាតិក្យូឆឺរប្រាយ</b> មានការទទួលស្គាល់ដូចខាងក្រោម</h1>
                <h1 className="welcome w-full text-sm sm:text-xl md:text-2xl lg:text-3xl">សាលា <b>អន្តរជាតិក្យូឆឺរប្រាយ</b> មានការទទួលស្គាល់ដូចខាងក្រោម</h1>
                <h1 className="welcome w-full text-sm sm:text-xl md:text-2xl lg:text-3xl">សាលា <b>អន្តរជាតិក្យូឆឺរប្រាយ</b> មានការទទួលស្គាល់ដូចខាងក្រោម</h1>
                <h1 className="welcome w-full text-sm sm:text-xl md:text-2xl lg:text-3xl">សាលា <b>អន្តរជាតិក្យូឆឺរប្រាយ</b> មានការទទួលស្គាល់ដូចខាងក្រោម</h1>
                <h1 className="welcome w-full text-sm sm:text-xl md:text-2xl lg:text-3xl">សាលា <b>អន្តរជាតិក្យូឆឺរប្រាយ</b> មានការទទួលស្គាល់ដូចខាងក្រោម</h1>
            </div>
        </motion.div>
    );
};

export default LicensePage;
