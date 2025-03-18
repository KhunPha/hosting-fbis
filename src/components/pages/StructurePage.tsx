import structure from "../../assets/images/structure.png"
import { motion } from "framer-motion";
import { containerVariants } from "../../utils/switch";

const StructurePage = () => {
    return (
        <motion.div className="w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1 className="text-black text-lg uppercase font-medium">History FBIS</h1>
            <div className="flex justify-center mt-5">
                <img src={structure} alt="" />
            </div>
        </motion.div>
    );
};

export default StructurePage;
