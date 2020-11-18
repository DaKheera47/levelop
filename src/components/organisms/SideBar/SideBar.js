import React, { useContext } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { SideBarContext } from "../../contexts/SideBarContext";

import "./SideBar.sass";

export default function SideBar() {
    const { toggleSideBar, isSideBarOpen } = useContext(SideBarContext);

    return (
        <>
            <div onClick={toggleSideBar}>
                <Hamburger
                    toggled={isSideBarOpen}
                    color="white"
                    size={20}
                    direction="right"
                    hideOutline={true}
                />
            </div>

            <AnimatePresence>
                {isSideBarOpen && (
                    <motion.div
                        className="side-bar"
                        initial={{ translateX: -250, opacity: 0 }}
                        animate={{ translateX: 0, opacity: 1 }}
                        transition={{ duration: 0.25 }}
                        exit={{ translateX: -250, opacity: 0 }}
                    >
                        <NavLink
                            className="side-bar-item highlighted"
                            to="/"
                            activeClassName="active"
                        >
                            New Post
                        </NavLink>
                        <NavLink
                            className="side-bar-item"
                            to="/"
                            activeClassName="active"
                        >
                            Feed
                        </NavLink>
                        <NavLink
                            className="side-bar-item"
                            to="/settings"
                            activeClassName="active"
                        >
                            Settings
                        </NavLink>
                        <NavLink
                            className="side-bar-item"
                            to="/"
                            activeClassName="active"
                        >
                            Saved
                        </NavLink>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
