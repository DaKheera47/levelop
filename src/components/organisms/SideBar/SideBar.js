import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { SideBarContext } from "../../contexts/SideBarContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

import CallToAction from "../../atoms/CallToAction";

import "./SideBar.sass";

export default function SideBar() {
    const { toggleSideBar, isSideBarOpen, closeSideBar } = useContext(
        SideBarContext
    );

    return (
        <>
            <div onClick={toggleSideBar}>
                {isSideBarOpen ? (
                    <CgClose className="side-bar-ham" color="white" size={22} />
                ) : (
                    <GiHamburgerMenu
                        className="side-bar-ham"
                        color="white"
                        size={22}
                    />
                )}
            </div>

            <AnimatePresence>
                {isSideBarOpen && (
                    <motion.div
                        className="side-bar"
                        initial={{ translateX: -250 }}
                        animate={{ translateX: 0 }}
                        transition={{ duration: 0.2 }}
                        exit={{ translateX: -250 }}
                    >
                        <div className="side-bar-item-container">
                            <NavLink
                                className="side-bar-item highlighted"
                                to="/new-post"
                                activeClassName="active"
                                onClick={() => {
                                    closeSideBar();
                                }}
                            >
                                New Post
                            </NavLink>

                            <NavLink
                                className="side-bar-item"
                                to="/"
                                exact
                                activeClassName="active"
                                onClick={() => {
                                    closeSideBar();
                                }}
                            >
                                Feed
                            </NavLink>

                            <NavLink
                                className="side-bar-item"
                                to="/settings"
                                activeClassName="active"
                                onClick={() => {
                                    closeSideBar();
                                }}
                            >
                                Settings
                            </NavLink>

                            <NavLink
                                className="side-bar-item"
                                to="/saved"
                                activeClassName="active"
                                onClick={() => {
                                    closeSideBar();
                                }}
                            >
                                Saved
                            </NavLink>
                        </div>

                        <CallToAction className="side-bar-CTA" text="Sign Up" />
                        <CallToAction
                            className="side-bar-secondary-CTA"
                            text="Log In"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}