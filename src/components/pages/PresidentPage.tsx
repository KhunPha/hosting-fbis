import president from "../../assets/images/president.png"

const PresidentPage = () => {
    return (
        <div className="flex flex-col w-full">
            <h1 className="text-black text-lg uppercase font-medium">President's Message</h1>
            <div className="flex items-center flex-col justify-center space-y-5 sm:flex-row shadow-md text-black w-full h-auto mt-5">
                <img src={president} alt="president" className="sm:ml-[20px] sm:mr-[20px] md:ml-[50px] md:mr-[50px] lg:ml-[50px] lg:mr-[100px] xl:ml-[50px] xl:mr-[150px]" />
                <div className="flex-1 flex-col space-y-3">
                    <h1 className="font-kh text-2xl font-bold">ឯកឧត្តមបណ្ឌិត សៀន សុវណ្ណា</h1>
                    <h1 className="font-kh text-2xl font-bold">ស្ថាបនិក និងជាប្រធានក្រុមប្រឹក្សាភិបាល នៃសាលា អន្ដរជាតិភ្យូឆឺរប្រាយ</h1>
                    <p className="welcome">ក្រោមម្លប់នៃសន្តិភាព បានធ្វើឲ្យកម្ពុជាមានការអភិវឌ្ឍលើគ្រប់វិស័យ ជាពិសេសលើការបណ្តុះបណ្តាលធនធានមនុស្ស
ដើម្បីចូលរួមអភិវឌ្ឍប្រទេសនាពេលអនាគត ស្របតាមគោលនយោបាយរបស់រាជរដ្ឋាភិបាល អាណាព្យាបាលត្រូវអប់រំ
កូនចៅនៅផ្ទះបន្ថែមទៀត ឱ្យគាត់យកចិត្តទុកដាក់លើការសិក្សា ដើម្បីទទួលចំណេះដឹង ជំនាញ និងបំណិនសម្រាប់
បន្តការសិក្សានៅសាកលវិទ្យាល័យ</p>
                </div>
            </div>
        </div>
    )
}

export default PresidentPage;