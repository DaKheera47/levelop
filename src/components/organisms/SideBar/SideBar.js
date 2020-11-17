import React, { useState, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";

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

            {isOpen && (
                <div className="side-bar">
                    <h1 className="side-bar-item highlighted">New Post</h1>
                    <h1 className="side-bar-item active">Feed</h1>
                    <h1 className="side-bar-item">Settings</h1>
                    <h1 className="side-bar-item">Saved</h1>
                </div>
            )}
        </>
    );
}
