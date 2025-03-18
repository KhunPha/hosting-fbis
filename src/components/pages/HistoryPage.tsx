import school from "../../assets/images/school.png";
import { motion } from "framer-motion";
import { containerVariants } from "../../utils/switch";

const HistoryPage = () => {
    return (
        <motion.div className="w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1 className="text-black text-lg uppercase font-medium">History FBIS</h1>
            <div className="mt-5 relative">
                <img src={school} alt="School" className="w-full md:w-[300px] h-auto p-2 float-left mr-4 mb-2" />
                <p className="welcome text-justify clear-both md:clear-right">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloremque odit illo facere suscipit repudiandae labore sapiente quaerat tenetur atque, vitae, ad molestias, autem dolore ratione aut nemo? Repellendus quisquam iste exercitationem voluptate sequi quos numquam. Ut nobis cupiditate est facilis tenetur velit et exercitationem aspernatur dicta harum aut dolorum ipsum natus quasi saepe nulla quos, ipsam illum tempora alias ab consequatur. Expedita provident error porro asperiores inventore labore autem voluptatem eligendi dolorum? Mollitia perferendis non voluptatibus aliquid, aut est autem fugit voluptatum distinctio doloremque praesentium optio ab, quas expedita obcaecati nobis laboriosam! Alias sunt vero reiciendis reprehenderit deserunt doloribus nam provident minus error, recusandae nulla quos quam itaque id dolor aut eveniet, molestiae voluptatum. Beatae illo, sint aliquid voluptas maxime totam quo, aut nesciunt iure tempora autem rem modi? Sunt corrupti incidunt eveniet quisquam repellendus quasi doloremque odit, natus, voluptates quo cum harum animi dicta fugiat facilis? Vitae iure sequi, voluptatum, perferendis temporibus veniam necessitatibus provident, dolores laborum totam quas similique officiis consequatur distinctio repudiandae minima dolore mollitia porro pariatur aut. Accusantium quod officiis consequatur praesentium vel fuga quisquam quia repellendus rerum dolore aliquid, necessitatibus cumque eius quibusdam asperiores unde iusto eveniet dolorum iure ad similique alias, porro facere ducimus? Aspernatur culpa accusantium minus labore, voluptatum distinctio corrupti dicta officia explicabo, iusto earum eveniet laudantium reprehenderit et error voluptatibus maxime rerum quo atque vero saepe corporis facilis voluptas. Nihil, est explicabo rem aut aliquam eius non, quaerat molestiae voluptas, suscipit rerum placeat fugit dolore. Totam, nostrum nesciunt non distinctio maxime sed quis incidunt tempora adipisci nihil. Expedita amet quasi sequi quibusdam ad quia corporis doloribus harum sed pariatur. Quaerat mollitia omnis vero! In impedit ipsa repellendus vero? Error, iste! Reprehenderit dolor voluptatem ratione? Expedita iste a quibusdam facere repellat quidem enim exercitationem. Veniam non porro facilis. Incidunt, at dicta eos et ipsum nobis magni minima, ratione adipisci aliquam id voluptatem natus laboriosam doloremque nostrum officiis repellat doloribus est omnis. Maiores in hic distinctio! Quam veniam, ab consectetur ducimus facilis ratione, dignissimos, doloremque eius earum eaque autem omnis quasi obcaecati neque saepe id. Corporis, dolore eaque. Tenetur repellat debitis consequuntur repudiandae incidunt ducimus facilis assumenda eius ut at. Corporis repellat sapiente tempore quam. Soluta, assumenda nulla quod vel voluptatem nihil possimus expedita eos fugit temporibus tempore esse alias voluptas incidunt perferendis officiis et rerum magni fuga consectetur earum maiores. Ducimus quo, iste deleniti suscipit voluptas esse, facilis doloremque delectus illo praesentium ad sapiente, fuga culpa ullam voluptatum aliquam minus dolorum quam porro numquam. Molestiae sint fugit saepe, voluptatum commodi, possimus quae cumque quibusdam autem consequuntur maxime deserunt quas, obcaecati veritatis expedita incidunt. Quia quos optio culpa! Tenetur quibusdam optio earum, veniam culpa laborum quo iure officia minima, dolorum facere repudiandae veritatis corporis sed est architecto inventore? Odio ab magnam veritatis dignissimos quo quis facilis, culpa suscipit ex, doloremque minima doloribus deleniti nemo quasi consectetur labore mollitia magni nihil laudantium ipsam itaque quae. Fugiat ipsum rerum fuga porro reprehenderit recusandae suscipit, temporibus nam laborum sed beatae quae dolores maiores ducimus doloribus?
                </p>
            </div>
        </motion.div>
    );
};

export default HistoryPage;
