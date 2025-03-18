import CodePen from "../../assets/images/CodePen-404-Page.gif"
import { motion } from "framer-motion";
import { containerVariants } from "../../utils/switch";

const NotFound = () => {
    return (
        <motion.div className="flex flex-col items-center justify-center w-screen h-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1 className="text-red-600 text-8xl font-bold">
                <img src={CodePen} alt="" className="w-full"/>
            </h1>
        </motion.div>
    )
}

export default NotFound;