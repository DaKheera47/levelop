import React from "react";
import HamburgerMenu from "react-hamburger-menu";

export default function Hamburger({ isOpen, handleOpen }) {
    return (
        <div>
            <HamburgerMenu
                isOpen={isOpen}
                menuClicked={handleOpen}
                width={18}
                height={15}
                strokeWidth={2}
                rotate={0}
                color="white"
                borderRadius={0}
                animationDuration={0.25}
            />
        </div>
    );
}
