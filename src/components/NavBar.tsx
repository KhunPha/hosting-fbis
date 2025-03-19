import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { translate } from "../utils/lang";

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
  const location = useLocation(); // Get the current location

  // Check if any submenu item is active by matching their paths with the current URL
  const isSubMenuActive = menu?.subMenu?.some((submenu: any) => {
    return submenu.path && location.pathname === submenu.path;
  });

  // Check if the menu itself is active (for menus without submenus)
  const isMenuActive = menu.path && location.pathname === menu.path;

  return (
    <motion.li
      className="group/link cursor-pointer relative"
      onMouseEnter={toggleHoverMenu}
      onMouseLeave={toggleHoverMenu}
      key={menu.name}
    >
      <NavLink
        to={menu.path || "#"}
        className={() => {
          // If the menu has a submenu, mark it as active if any of its submenu items is active
          // Otherwise, check if the menu itself is active
          return `relative flex items-center px-2 py-1 text-md font-medium gap-2 transition-all duration-300 text-purple-600`;
        }}
      >
        {translate(menu.trans)}
        {hasSubMenu && (
          <ChevronDown
            size={20}
            className="mt-[0.8px] transition-transform duration-300 group-hover/link:rotate-180"
          />
        )}

        {/* Underline effect */}
        <span
          className={`absolute bottom-0 left-0 w-full h-[2px] bg-purple-600 transform origin-left 
          transition-all duration-300 ${isSubMenuActive || isMenuActive ? "scale-x-100" : "scale-x-0"} 
          group-hover/link:scale-x-100`}
        ></span>
      </NavLink>

      {/* Submenu Dropdown with Framer Motion */}
      {hasSubMenu && (
        <motion.ul
          className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-md z-20 p-3 space-y-1 w-auto min-w-[250px] transition-all duration-300 ease-out mt-2" // Added mt-2 here
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          {/* Tooltip Arrow */}
          <span className="absolute left-1/2 transform -translate-x-1/2 top-[-10px] w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-b-white" />

          {/* Submenu items */}
          {menu.subMenu.map((submenu: any) => (
            <li key={submenu.name} className="cursor-pointer">
              <NavLink
                to={submenu.path}
                className={({ isActive }) =>
                  `block px-4 py-2 text-purple-600 hover:bg-purple-100 
                  ${isActive ? "bg-purple-200" : ""}`
                }
              >
                {submenu.name}
              </NavLink>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.li>
  );
};

export default NavBar;
