import { slide as Menu } from "react-burger-menu";
import React from "react";

import HamburgerIcon from "../../atoms/HamburgerIcon";
import HamburgerCross from "../../atoms/HamburgerCross";

import "./Hamburger.sass";

export default function Hamburger() {
    return (
        <Menu
            width={"50%"}
            customBurgerIcon={<HamburgerIcon />}
            customCrossIcon={<HamburgerCross />}
        >
            <a id="ham-new-post" className="menu-item" href="/">
                New Post
            </a>
            <a id="ham-feed" className="menu-item" href="/about">
                Feed
            </a>
            <a className="menu-item--small" href="">
                Settings
            </a>
            <a id="contact" className="menu-item" href="/contact">
                Saved
            </a>
        </Menu>
    );
}
