import { Partnerships } from "../../utils/utils";

const PartnershipPage = () => {
    return (
        <div className="w-full">
            <h1 className="text-black text-lg uppercase font-medium">History FBIS</h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 justify-center mt-5 gap-3">
                {Partnerships.map((img) => (
                    <img src={img.url} alt=""  className="w-[150px] mx-auto" />
                ))}
            </div>
        </div>
    );
};

export default PartnershipPage;
