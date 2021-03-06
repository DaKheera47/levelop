import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SideBarContext } from "../../../contexts/SideBarContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import SideBarContent from "../../molecules/SideBarContent/SideBarContent";
import SideBarProfile from "../../molecules/SideBarProfile/SideBarProfile";
import Cookies from "universal-cookie";

import "./SideBar.sass";
import { ApiContext } from "../../../contexts/ApiContext";

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
            to: "/",
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
                            initial={{ translateX: -250 }}
                            animate={{ translateX: 0 }}
                            transition={{
                                duration: 0.2,
                            }}
                            exit={{ translateX: -250 }}
                        >
                            {isAuthenticated ? (
                                <SideBarProfile
                                    imageSrc="https://cdn.discordapp.com/attachments/534742075783249931/795274374172901406/Facedp.jpg"
                                    profileName={currUser?.fullname}
                                    profileHandle={`@${currUser?.username}`}
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
