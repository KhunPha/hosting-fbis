import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const NavBar = ({ menu }: any) => {
  const [isHover, setIsHover] = useState(false);

  const toggleHoverMenu = () => {
    setIsHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.li
      className="group/link cursor-pointer relative"
      onMouseEnter={toggleHoverMenu}
      onMouseLeave={toggleHoverMenu}
      key={menu.name}
    >
      <span className="relative flex items-center px-2 py-1 text-purple-600 text-md font-bold gap-2">
        {menu.name}
        {hasSubMenu && (
          <ChevronDown
            size={20}
            className="mt-[0.8px] transition-transform duration-300 group-hover/link:rotate-180"
          />
        )}

        {/* Underline effect (CSS) */}
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-600 transform origin-left scale-x-0 group-hover/link:scale-x-100 transition-all duration-300"></span>
      </span>

      {/* Submenu Dropdown with Framer Motion */}
      {hasSubMenu && (
        <motion.ul
          className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-md z-20 p-3 space-y-1 w-auto min-w-[250px] transition-all duration-300 ease-out"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          {/* Tooltip Arrow */}
          <span className="absolute left-1/2 transform -translate-x-1/2 top-[-10px] w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-b-white" />

          {/* Submenu items */}
          {menu.subMenu.map((submenu: any) => (
            <li
              key={submenu.name}
              className="px-4 py-2 text-purple-600 hover:bg-purple-100 cursor-pointer"
            >
              {submenu.name}
            </li>
          ))}
        </motion.ul>
      )}
    </motion.li>
  );
};

export default NavBar;
