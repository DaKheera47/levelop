import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

import LogoSvg from "../../atoms/logo";
import HamburgerMenu from "../../molecules/navHamburger/NavHamburger";

import "./navStyle.sass";

export default function NavBar() {
    return (
        <nav className="navbar">
            <HamburgerMenu className="navbar-hamburger" />
            <LogoSvg />
            <HiOutlineSearch className="navbar-search" color="white" />
        </nav>
    );
}
