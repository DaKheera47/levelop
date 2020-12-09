import React from "react";
import CustomInputField from "../CustomInputField/CustomInputField";

export default function SettingsOccupation() {
    return (
        <div>
            <CustomInputField label="Education" />
            <CustomInputField label="Employment Type" />
            <CustomInputField label="Title/Role" />
        </div>
    );
}
