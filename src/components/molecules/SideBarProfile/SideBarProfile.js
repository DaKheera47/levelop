import React from "react";
import Nibble from "../../atoms/Nibble";

export default function SideBarProfile({
    imageSrc,
    profileName,
    profileHandle,
    profileNibbles,
}) {
    return (
        <div className="side-bar-profile-container">
            <img src={imageSrc} alt="Profile" className="side-bar-profileUrl" />
            <div className="side-bar-profile-info-container">
                <p className="side-bar-profile-name">{profileName}</p>
                <p className="side-bar-profile-handle">
                    {profileHandle}
                    <span className="side-bar-profile-nibbles">
                        <Nibble className="side-bar-profile-nibble-logo" />
                        {profileNibbles}
                    </span>
                </p>
            </div>
        </div>
    );
}
