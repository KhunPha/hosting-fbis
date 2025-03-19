import { containerVariants } from "../../utils/switch";
import { Partnerships } from "../../utils/utils";
import { motion } from "framer-motion";

const PartnershipPage = () => {
    return (
        <motion.div className="w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1 className="text-black text-lg uppercase font-medium">Partnership</h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 justify-center mt-5 gap-3">
                {Partnerships.map((img) => (
                    <img src={img.url} alt=""  className="w-[150px] mx-auto" key={img.url} />
                ))}
            </div>
        </motion.div>
    );
};

export default PartnershipPage;
