import React from "react";
import CustomInputField from "../CustomInputField/CustomInputField";

export default function SettingsProfile() {
    return (
        <div>
            <h1 className="settings-style-customisation-subtitle">
                User Details
            </h1>

            <CustomInputField inputId="Full Name" label="Full Name" />
            <CustomInputField inputId="Email" label="Email" />
            <CustomInputField inputId="Username" label="Username" />
        </div>
    );
}
