import React, { createContext, useState } from "react";

export const SideBarContext = createContext();

const SideBarProvider = (props) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <SideBarContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
            {props.children}
        </SideBarContext.Provider>
    );
};

export { SideBarProvider };
