import React from "react";
import CustomInputField from "../CustomInputField/CustomInputField";

export default function SettingsProfile() {
    return (
        <div>
            <h1 className="settings-style-customisation-subtitle">
                User Details
            </h1>
            <CustomInputField label="Full Name" />
            <CustomInputField label="Email" />
            <CustomInputField label="Username" />

            <h1 className="settings-style-customisation-subtitle">
                Basic Information
            </h1>
            <CustomInputField label="Full Name" />
            <CustomInputField label="Location" />
            <CustomInputField label="Website" />
        </div>
    );
}
