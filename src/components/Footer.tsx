import logo from "../assets/images/fbislogo.png"
import ig from "../assets/images/ig.png"
import yt from "../assets/images/yt.png"
import fb from "../assets/images/facebook.png"
import tiktok from "../assets/images/titktok.png"
import telegram from "../assets/images/telegram.png"
import { Copyright, Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
    return (
        <div className="flex sm:justify-center flex-col py-3 px-3 mt-5 border-t-1 border-gray-400">
            <div className="flex flex-col space-y-5 md:flex-row">
                <div className="flex flex-col w-[100%] md:w-[40%] lg:w-[50%] items-center md:items-start">
                    <div className="flex items-center text-purple-600 space-x-2 font-semibold">
                        <img src={logo} alt="Logo" className="h-[40px]" />
                        <div className="block items-center text-center">
                            <p className="text-sm name-kh">សាលា អន្តរជាតិភ្យូឆឺរប្រាយ</p>
                            <p className="text-[11.5px]">Future Bright International School</p>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-3 mt-3">
                        <a href="https://www.facebook.com" target="_blank"><img src={fb} alt="" className="w-7"/></a>
                        <a href="https://www.telegram.com" target="_blank"><img src={telegram} alt="" className="w-7"/></a>
                        <a href="https://www.tiktok.com" target="_blank"><img src={tiktok} alt="" className="w-7"/></a>
                        <a href="https://www.instagram.com" target="_blank"><img src={ig} alt="" className="w-7"/></a>
                        <a href="https://www.youtube.com" target="_blank"><img src={yt} alt="" className="w-7"/></a>
                    </div>
                </div>

                <div className="flex flex-col w-[100%] md:w-[20%] lg:w-[10%]">
                    <ul className="space-y-2">
                        <li className="text-purple-600">Our School</li>
                        <li>About US</li>
                        <li>Vision</li>
                        <li>Mission</li>
                        <li>Core Value</li>
                    </ul>
                </div>

                <div className="flex flex-col w-[100%] md:w-[50%] lg:w-[40%]">
                    <ul className="space-y-2">
                        <li className="text-purple-600">Contact</li>
                        <li className="flex flex-row items-center space-x-2"><Phone className="w-5"/> <p>078 544 485 / 093 544 485</p></li>
                        <li className="flex flex-row items-center space-x-2"><Mail className="w-5"/> <p>info@fbis.edu.kh</p></li>
                        <li className="flex flex-row items-center space-x-2"><MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"/> <p>7 Makara Street, Watbo Village, Salakamroeuk Commune,
                        Siem Reap Municipality, Siem Reap Province, Cambodia </p></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-row mx-auto w-[60%] border-t-1 border-gray-400 mt-10 py-4 justify-center text-center">
                <Copyright className="mr-3"/>Copyright by FBIS 2025. All Rights Reserved
            </div>
        </div>
    )
}

export default Footer;