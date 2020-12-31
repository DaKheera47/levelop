import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SideBarContext } from "../../contexts/SideBarContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import SideBarContent from "../../molecules/SideBarContent/SideBarContent";
import SideBarProfile from "../../molecules/SideBarProfile/SideBarProfile";
import Cookies from "universal-cookie";

import "./SideBar.sass";
import { ApiContext } from "../../contexts/ApiContext";

export default function SideBar() {
    const { toggleSideBar, isSideBarOpen, closeSideBar } = useContext(
        SideBarContext
    );

    const { currUser } = useContext(ApiContext);

    const cookies = new Cookies();

    // const isAuthenticated = false;
    const isAuthenticated = !!cookies.get("jwt");

    const navLinksPaths = [
        {
            to: "/posts",
            text: "Feed",
            requiresAuth: true,
        },
        {
            to: "/settings",
            text: "Settings",
            requiresAuth: true,
        },
        {
            to: "/saved",
            text: "Saved",
            requiresAuth: true,
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
                    <>
                        <div
                            className="side-bar-click-detector"
                            onClick={closeSideBar}
                        ></div>
                        <motion.div
                            className="side-bar"
                            initial={{ translateX: -500 }}
                            animate={{ translateX: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: [0.55, 0.79, 0.55, 0.81],
                            }}
                            exit={{ translateX: -500 }}
                        >
                            {isAuthenticated ? (
                                <SideBarProfile
                                    imageSrc="https://images.iphonephotographyschool.com/24755/portrait-photography.jpg"
                                    profileName={currUser?.fullName}
                                    profileHandle={currUser?.username}
                                    profileNibbles="5.7K"
                                />
                            ) : (
                                <SideBarProfile
                                    imageSrc="https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg"
                                    profileName="Hello Guest User!"
                                    profileHandle="@guest"
                                    profileNibbles="0"
                                />
                            )}

                            <div className="side-bar-content">
                                <SideBarContent
                                    navLinksPaths={navLinksPaths}
                                    isAuthenticated={isAuthenticated}
                                />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
