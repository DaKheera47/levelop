import React from "react";
import Nibble from "../../atoms/Nibble";

import "./HomeProfile.sass";

export default function SideBarProfile({
    imageSrc,
    profileName,
    profileHandle,
    profileNibbles,
}) {
    return (
        <>
            <img
                src={imageSrc}
                alt="Profile"
                className="home-profile-profileUrl"
            />
            <div className="home-profile-profile-info-container">
                <p className="home-profile-profile-name">{profileName}</p>
                <p className="home-profile-profile-handle">
                    {profileHandle}
                    <span className="home-profile-profile-nibbles">
                        <Nibble className="home-profile-profile-nibble-logo" />
                        {profileNibbles}
                    </span>
                </p>
            </div>
        </>
    );
}
