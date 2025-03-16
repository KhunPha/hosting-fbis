import study from "../assets/images/study.png"

const StudyTab = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-3 gap-y-3">
            {Array.from({length: 12}).map((_, index) => (
                <img src={study} alt="" key={index} className="cursor-pointer" />
            ))}
        </div>
    )
}

export default StudyTab;