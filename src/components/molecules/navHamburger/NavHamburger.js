import React, { useState } from "react";

import Hamburger from "../../atoms/Hamburger";

export default function HamburgerMenu({ className }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={className}>
            <Hamburger handleClick={handleClick} isOpen={isOpen} />
        </div>
    );
}
