import React, { useContext } from "react";
import "./SideBar.sass";
import { SideBarContext } from "../../../components/contexts/SideBarContext";

export default function SideBar() {
    const sideBarState = useContext(SideBarContext);

    if (sideBarState.isSideBarOpen) {
        return (
            <div className="sidebar">
                <h5>This si rocket league</h5>
            </div>
        );
    } else {
        return null;
    }
}
