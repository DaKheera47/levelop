import { BiSearchAlt2 } from "react-icons/bi";
import { FaRegPlusSquare } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import LogoSvg from "../../atoms/logo";
import SideBar from "../SideBar/SideBar";

import "./navStyle.sass";

export default function NavBar() {
    const history = useHistory();

    const handleLogoClick = () => {
        history.push("/");
    };

    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 768px)",
    });

    return (
        <nav className="navbar">
            <div className="navbar-hamburger">
                <SideBar />
            </div>
            <div className="navbar-logo" onClick={handleLogoClick}>
                {isDesktopOrLaptop ? <LogoSvg isLarge={true} /> : <LogoSvg />}
            </div>
            <Link to="/new-article" className="navbar-new-post">
                <FaRegPlusSquare
                    key="posticon"
                    // somehow only inline styles work here because they are applied to the element instead of to a class
                    style={{
                        marginRight: "10px",
                        height: "25px",
                        verticalAlign: "text-top",
                    }}
                />
                New Post
            </Link>
            <BiSearchAlt2 size={23} className="navbar-search" color="white" />
        </nav>
    );
}
