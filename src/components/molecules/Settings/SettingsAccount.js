import React from "react";
import CustomInputField from "../CustomInputField/CustomInputField";

export default function SettingsAccount() {
    return (
        <div>
            <CustomInputField label="Old Password" />
            <CustomInputField label="New Password" />
        </div>
    );
}
