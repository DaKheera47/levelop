import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

import "./SideBar.sass";

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div onClick={toggleSideBar}>
                <Hamburger
                    toggled={isOpen}
                    color="white"
                    size={20}
                    direction="right"
                    hideOutline={true}
                />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="side-bar"
                        initial={{ translateX: -250, opacity: 0 }}
                        animate={{ translateX: 0, opacity: 1 }}
                        transition={{ duration: 0.25 }}
                        exit={{ translateX: -250, opacity: 0 }}
                    >
                        <h1 className="side-bar-item highlighted">New Post</h1>
                        <h1 className="side-bar-item active">Feed</h1>
                        <h1 className="side-bar-item">Settings</h1>
                        <h1 className="side-bar-item">Saved</h1>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
