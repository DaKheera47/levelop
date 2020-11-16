import React from "react";

import LogoSvg from "../../atoms/logo";

import "./navStyle.sass";

export default function NavBar() {
    return (
        <nav className="navbar">
            <LogoSvg />
        </nav>
    );
}
