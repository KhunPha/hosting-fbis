import samath from "../assets/images/oh_samath.png"
import vuthy from "../assets/images/vuthy.png"

const ShowDetailsExe = ({index}: any) => {
    const staffList = [
        { name: "Mr. OH SAM ATH", role: "HR", image: samath },
        { name: "Mr. MANN VUTHY", role: "Director", image: vuthy },
        { name: "Ms. SOK RATH", role: "Finance", image: samath },
        { name: "Mr. KIM SEILA", role: "IT", image: vuthy },
        { name: "Mr. CHAN DARA", role: "Marketing", image: samath },
        { name: "Ms. SOK LEAK", role: "Admin", image: vuthy },
        { name: "Mr. MEAS KIM", role: "Operations", image: samath }
    ];

    const staff = staffList[index];

    console.log(index)

    return (
        <div className="w-[320px] sm:w-auto sm:h-[350px] md:h-[500px] flex flex-col p-5 justify-center items-center bg-white rounded-lg" onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 h-full gap-y-3 sm:mt-5 flex-col-reverse">
                <div className="flex flex-col">
                    <h2>{staff.name}</h2>
                    <p>{staff.role}</p>
                </div>
                <img src={staff.image} alt="" className="h-full flex" />
            </div>
        </div>
    )
}

export default ShowDetailsExe;