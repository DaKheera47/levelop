import React, { createContext, useState } from "react";

export const SideBarContext = createContext();

const SideBarProvider = (props) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    };

    const openSideBar = () => {
        setIsSideBarOpen(true);
    };

    const closeSideBar = () => {
        setIsSideBarOpen(false);
    };

    return (
        <SideBarContext.Provider
            value={{
                openSideBar,
                closeSideBar,
                toggleSideBar,
                isSideBarOpen,
                setIsSideBarOpen,
            }}
        >
            {props.children}
        </SideBarContext.Provider>
    );
};

export { SideBarProvider };
