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

    const navLinksPaths = [
        {
            to: "/new-post",
            text: "New Post",
            isHighlighted: true,
        },
        {
            to: "/",
            text: "Feed",
            isHighlighted: false,
        },
        {
            to: "/settings",
            text: "Settings",
            isHighlighted: false,
        },
        {
            to: "/saved",
            text: "Saved",
            isHighlighted: false,
        },
    ];

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
                        transition={{
                            duration: 0.3,
                            ease: [0.55, 0.79, 0.55, 0.81],
                        }}
                        exit={{ translateX: -250 }}
                    >
                        <div className="side-bar-content">
                            <div className="side-bar-item-container">
                                {navLinksPaths.map((e) => (
                                    <NavLink
                                        className={
                                            e.isHighlighted
                                                ? "side-bar-item highlighted"
                                                : "side-bar-item"
                                        }
                                        exact
                                        to={e.to}
                                        activeClassName="active"
                                        onClick={() => {
                                            closeSideBar();
                                        }}
                                    >
                                        {e.text}
                                    </NavLink>
                                ))}
                            </div>

                            <div className="side-bar-CTA-container">
                                <CallToAction
                                    className="side-bar-CTA"
                                    text="Sign Up"
                                />

                                <CallToAction
                                    className="side-bar-secondary-CTA"
                                    text="Log In"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
