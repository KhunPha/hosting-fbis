import { Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import cambodia from "./assets/images/cambodia.png";
import english from "./assets/images/english.png";
import NavBar from "./components/NavBar";
import logo from "./assets/images/fbislogo.png";
import { Menus } from "./utils/utils.ts";
import { motion } from "framer-motion";
import HomePage from "./components/pages/HomePage.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound.tsx";
import { setLang } from "./utils/lang.ts"
import PresidentPage from "./components/pages/PresidentPage.tsx";
import HistoryPage from "./components/pages/HistoryPage.tsx";
import LicensePage from "./components/pages/LicensePage.tsx";
import ExecutivePage from "./components/pages/ExecutivePage.tsx";
import OurLogoPage from "./components/pages/OurLogoPage.tsx";
import StructurePage from "./components/pages/StructurePage.tsx";
import PartnershipPage from "./components/pages/PartnershipPage.tsx";
import ProgramKhPage from "./components/pages/ProgramKhPage.tsx";
import ProgramEnPage from "./components/pages/ProgramEnPage.tsx";
import DocumentPage from "./components/pages/DocumentPage.tsx";
import NewsPage from "./components/pages/NewsPage.tsx";
import TuitionPage from "./components/pages/TuitionPage.tsx";
import CareerPage from "./components/pages/CareerPage.tsx";
import MobBar from "./components/MobBar.tsx";
import GalleryPage from "./components/pages/GalleryPage.tsx";

const App = () => {
  const [lang, setLangState] = useState(localStorage.getItem("language") || "en");
  const [drawer, setDrawer] = useState(false);

  const handleLang = () => {
    const language = lang === "en" ? "kh" : "en";
    setLang(language);
    setLangState(language);
  };

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <div className="relative h-full w-full">
      <header className="flex flex-row items-center justify-center md:justify-end bg-purple-600 px-5 py-2 space-x-3">
        <div className="flex items-center text-white font-semibold space-x-1">
          <Mail size={22} />
          <p className="text-sm">info@fbis.edu.kh</p>
        </div>
        <div className="flex items-center text-white font-semibold space-x-1">
          <Phone size={20} />
          <p className="text-sm">099 514 681</p>
        </div>
        <button className="block items-center cursor-pointer" onClick={handleLang}>
          <img src={lang === "en" ? english : cambodia} alt="language" className="w-8 h-5 rounded-sm" />
        </button>
      </header>

      <Router>
        <nav className={`sticky top-0 flex items-center bg-white shadow-md justify-between px-5 py-2 z-[999]`}>
          <div className="flex items-center text-purple-600 space-x-2 font-semibold">
            <img src={logo} alt="Logo" className="h-[50px]" />
            <div className="block items-center text-center">
              <p className="text-md name-kh">សាលា អន្តរជាតិភ្យូឆឺរប្រាយ</p>
              <p className="text-sm">Future Bright International School</p>
            </div>
          </div>
          <ul className={`hidden xl:flex items-center space-x-4 ${lang === "en" ? "" : "font-kh"}`}>
            {Menus.map((menu) => (
              <NavBar menu={menu} key={menu.name} />
            ))}
          </ul>

          <motion.button
            className="flex xl:hidden items-center text-purple-600 cursor-pointer"
            onClick={handleDrawer}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              {drawer ? <X size={25} /> : <Menu size={25} />}
            </motion.div>
          </motion.button>
        </nav>

        <div className="flex mx-auto px-2 sm:w-auto sm:px-2 md:w-[768px] lg:w-[1024px] xl:w-[1200px] mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/president" element={<PresidentPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/license" element={<LicensePage />} />
            <Route path="/executive" element={<ExecutivePage />} />
            <Route path="/ourlogo" element={<OurLogoPage />} />
            <Route path="/structure" element={<StructurePage />} />
            <Route path="/partnership" element={<PartnershipPage />} />
            <Route path="/khmergen" element={<ProgramKhPage />} />
            <Route path="/engfull" element={<ProgramEnPage />} />
            <Route path="/documents" element={<DocumentPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/tuition" element={<TuitionPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </div>

        {/* Drawer */}
        <div
          className={`fixed top-0 left-0 w-screen sm:w-sm h-screen flex flex-col p-3 bg-white rounded-tr-md rounded-br-md transition-all duration-300 ${
            drawer ? "translate-x-0" : "-translate-x-full"
          } xl:-translate-x-full z-[1000] gap-y-16 shadow-lg`}
        >
          <div className="flex items-center text-purple-600 space-x-2 font-semibold justify-between">
            <img src={logo} alt="Logo" className="h-[40px]" />
            <div className="block items-center text-center">
              <p className="text-md name-kh">សាលា អន្តរជាតិភ្យូឆឺរប្រាយ</p>
              <p className="text-sm">Future Bright International School</p>
            </div>
            <button className="cursor-pointer" onClick={handleDrawer}>
              <X size={25} />
            </button>
          </div>
          {/* Add other drawer content like NavBar items */}
          <div className="flex flex-col overflow-y-auto hide-scrollbar">
            <MobBar Menus={Menus} handleDrawerClose={handleDrawer} />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
