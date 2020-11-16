import { BiSearchAlt2 } from "react-icons/bi";

import LogoSvg from "../../atoms/logo";
import HamburgerMenu from "../../molecules/navHamburger/Hamburger";

import "./navStyle.sass";

export default function NavBar() {
    return (
        <nav className="navbar">
            <HamburgerMenu className="navbar-hamburger" />
            <LogoSvg />
            <BiSearchAlt2 size={23} className="navbar-search" color="white" />
        </nav>
    );
}
