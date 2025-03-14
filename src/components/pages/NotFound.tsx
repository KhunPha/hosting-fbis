import CodePen from "../../assets/images/CodePen-404-Page.gif"

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-full">
            <h1 className="text-red-600 text-8xl font-bold">
                <img src={CodePen} alt="" className="w-full"/>
            </h1>
        </div>
    )
}

export default NotFound;