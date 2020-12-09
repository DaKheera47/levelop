import React from "react";
import CustomInputField from "../CustomInputField/CustomInputField";

export default function SettingsAdditionalLinks() {
    return (
        <div>
            <CustomInputField label="Stackoverflow" />
            <CustomInputField label="Github" />
            <CustomInputField label="Dribbble" />
            <CustomInputField label="Behance" />
            <CustomInputField label="Medium" />
            <CustomInputField label="LinkedIn" />
            <CustomInputField label="Instagram" />
        </div>
    );
}
