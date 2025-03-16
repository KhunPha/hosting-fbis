import exam from "../assets/images/exam.png"

const ExamTab = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-3 gap-y-3">
            {Array.from({length: 12}).map((_, index) => (
                <img src={exam} alt="" key={index} />
            ))}
        </div>
    )
}

export default ExamTab;