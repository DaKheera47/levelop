import React from "react";
import HamburgerMenu from "react-hamburger-menu";

export default function Hamburger({ isOpen, handleClick }) {
    return (
        <div>
            <HamburgerMenu
                isOpen={isOpen}
                menuClicked={handleClick}
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
