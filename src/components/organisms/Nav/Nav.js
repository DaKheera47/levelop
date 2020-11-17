import { BiSearchAlt2 } from "react-icons/bi";

import LogoSvg from "../../atoms/logo";
import SideBar from "../SideBar/SideBar";

import "./navStyle.sass";

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-hamburger">
                <SideBar />
            </div>
            <LogoSvg />
            <BiSearchAlt2 size={23} className="navbar-search" color="white" />
        </nav>
    );
}
