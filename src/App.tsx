import { Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import cambodia from "./assets/images/cambodia.png";
import english from "./assets/images/english.png";
import NavBar from "./components/NavBar";
import logo from "./assets/react.svg";
import { Menus } from "./utils/utils.ts";
import { motion } from "framer-motion";
import Content from "./components/Content.tsx";

const App = () => {
  const [lang, setLang] = useState(false);
  const [drawer, setDrawer] = useState(false);

  const handleLang = () => {
    setLang(!lang);
  }

  const handleDrawer = () => {
    setDrawer(!drawer);
  }

  if(drawer) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }

  return (
    <div className={`relative h-full w-full`}>
        <header className="flex flex-row items-center justify-center md:justify-end bg-purple-600 px-5 py-2 space-x-3">
          <div className="flex items-center text-white font-semibold space-x-1">
            <Mail size={22} />
            <p className="text-sm">info@fbis.edu.kh</p>
          </div>
          <div className="flex items-center text-white font-semibold space-x-1">
            <Phone size={20} />
            <p className="text-sm">099 514 681</p>
          </div>
          <button className="block items-center cursor-pointer" onClick={() => handleLang()}>
            {lang ? <img src={english} alt="english" className="w-8 h-5 rounded-sm" /> : <img src={cambodia} alt="cambodia" className="w-8 h-5 rounded-sm" />}
          </button>
        </header>
        <nav className="sticky top-0 flex items-center bg-white shadow-md justify-between px-5 py-2">
          <div className="flex items-center text-purple-600 space-x-2 font-semibold">
            <img src={logo} alt="" className="h-[40px]" />
            <div className="block items-center text-center">
              <p className="text-md name-kh">សាលា អន្តរជាតិភ្យូឆឺរប្រាយ</p>
              <p className="text-sm">Future Bright International School</p>
            </div>
          </div>
          <ul className="hidden xl:flex items-center space-x-2">
            {Menus.map((menu) => (
              <NavBar menu={menu} key={menu.name}/>
            ))}
          </ul>

          <motion.button
            className="flex xl:hidden items-center text-purple-600 cursor-pointer"
            onClick={handleDrawer}
            whileTap={{ scale: 0.9 }} // Animation when the button is clicked
            transition={{ duration: 0.2 }} // Duration of the animation
          >
            {/* Motion wrapper for animated icon */}
            <motion.div
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              {drawer ? (
                <X size={25} />
              ) : (
                <Menu size={25} />
              )}
            </motion.div>
          </motion.button>
        </nav>

        {/* drawer */}
        <div className={`absolute top-0 ${drawer ? "left-0" : "-left-200"} w-screen sm:w-sm h-screen flex flex-col p-3 bg-white rounded-tr-md rounded-br-md duration-300 xl:-left-200 z-[999]`}>
            <div className="flex items-center text-purple-600 space-x-2 font-semibold justify-between">
              <img src={logo} alt="" className="h-[40px]" />
              <div className="block items-center text-center">
                <p className="text-md name-kh">សាលា អន្តរជាតិភ្យូឆឺរប្រាយ</p>
                <p className="text-sm">Future Bright International School</p>
              </div>
              <button className="cursor-pointer" onClick={() => handleDrawer()}>
                <X size={25} />
              </button>
            </div>
        </div>

        {/* content */}
        <div className="flex mx-auto px-2 sm:w-auto sm:px-2 md:w-[768px] lg:w-[1024px] xl:w-[1200px] mt-4">
              <Content />
        </div>
    </div>
  )
}

export default App;