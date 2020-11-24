import { BiSearchAlt2 } from "react-icons/bi";

import { useHistory } from "react-router-dom";
import LogoSvg from "../../atoms/logo";
import SideBar from "../SideBar/SideBar";

import "./navStyle.sass";

export default function NavBar() {
    const history = useHistory();

    const handleLogoClick = () => {
        history.push("/");
    };

    return (
        <nav className="navbar">
            <div className="navbar-hamburger">
                <SideBar />
            </div>
            <div className="navbar-logo" onClick={handleLogoClick}>
                <LogoSvg />
            </div>
            <BiSearchAlt2 size={23} className="navbar-search" color="white" />
        </nav>
    );
}
