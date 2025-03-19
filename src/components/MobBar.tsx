import { ChevronDown } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { translate } from "../utils/lang";

const MobBar = ({ Menus, handleDrawerClose }: any) => {
    const [clicked, setClicked] = useState<number | null>(null);
    const location = useLocation(); // Get the current path

    const subMenuDrawer = {
        enter: { height: "auto", overflow: "hidden" },
        exit: { height: 0, overflow: "hidden" },
    };

    return (
        <ul className="flex flex-col space-y-3 text-purple-600 font-medium">
            {Menus.map(({ name, subMenu, trans, path }: any, i: number) => {
                const hasSubMenu = subMenu?.length > 0;
                const isSubMenuActive = hasSubMenu && subMenu.some((submenu: any) => location.pathname === submenu.path);
                const isMainMenuActive = location.pathname === path || isSubMenuActive;
                const isClicked = clicked === i;

                return (
                    <li key={name} className="group/link cursor-pointer h-full">
                        <div
                            className={`flex justify-between items-center py-3 px-2 rounded-md 
                                ${isMainMenuActive ? "text-purple-600 font-semibold bg-purple-100" : "group-hover/link:bg-purple-600/20"}`}
                            onClick={() => hasSubMenu && setClicked(isClicked ? null : i)}
                        >
                            <NavLink
                                to={path || "#"}
                                className="w-full h-full"
                                onClick={() => {
                                    if (path) handleDrawerClose(); // Close drawer when clicking a direct link
                                }}
                            >
                                {translate(trans)}
                            </NavLink>
                            {hasSubMenu && (
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ${isClicked ? "rotate-180" : ""}`}
                                />
                            )}
                        </div>

                        {hasSubMenu && (
                            <motion.ul
                                initial="exit"
                                animate={isClicked ? "enter" : "exit"}
                                variants={subMenuDrawer}
                                className="flex flex-col space-y-2 ml-7 mr-5 mt-1 overflow-hidden"
                            >
                                {subMenu.map((submenu: any) => {
                                    const isSubMenuActive = location.pathname === submenu.path;
                                    return (
                                        <li key={submenu.name} className="group/sub">
                                            <NavLink
                                                to={submenu.path}
                                                className={`block py-2 px-3 rounded-md 
                                                    ${isSubMenuActive ? "text-purple-600 font-semibold bg-purple-100" : "group-hover/sub:bg-purple-600/20"}`}
                                                onClick={handleDrawerClose} // Close drawer when submenu is clicked
                                            >
                                                {submenu.name}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </motion.ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default MobBar;
