import it from "../../assets/images/it.png"
import { containerVariants } from "../../utils/switch";
import { motion } from "framer-motion";

const CareerPage = () => {
    return (
        <motion.div className="w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1 className="text-black text-lg uppercase font-medium">Career</h1>
            <p className="mt-6 mb-7">Career opportunity page and find a position that suits your qualifications.</p>
            <hr />
            <div className="flex flex-col mt-6 space-y-6">
                <h1 className="text-black font-bold text-2xl">Position IT</h1>
                <div>
                    <img src={it} alt="" className="md:float-right mx-auto" />
                    <div className="flex flex-col">
                        <p className="text-gray-400 text-justify clear-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in mauris diam. Nulla ultrices est tellus. Sed vel sapien at dolor venenatis iaculis eget eget sem. Praesent sollicitudin egestas felis ac tempor. Praesent odio turpis, tempus sit amet magna eget, sollicitudin sodales tellus. Curabitur sed neque non lorem aliquam commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam cursus turpis at est consectetur, pharetra auctor orci faucibus. Etiam in felis dolor. Duis sed quam in sapien accumsan facilisis vel id turpis. In efficitur iaculis ipsum ac scelerisque. Sed quis mauris sed eros ultricies porta. Suspendisse at purus et massa consectetur faucibus. Vestibulum ultricies nibh leo, nec pellentesque odio consectetur sit amet.</p>
                        </div>
                        <div className="flex flex-col mt-4">
                            <span>
                                Date Due: <span className="text-red-600">19 Jan 2025</span>
                            </span>
                            <span>
                                Position: <span className="font-bold">3</span>
                            </span>
                        </div>
                    </div>
            </div>
        </motion.div>
    );
};

export default CareerPage;
