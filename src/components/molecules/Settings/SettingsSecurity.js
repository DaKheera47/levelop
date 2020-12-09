import React from "react";
import CustomLine from "../../atoms/CustomLine";

export default function SettingsSecurity() {
    return (
        <div>
            <div className="settings-button-selector-container">
                <span className="settings-security-text">Delete Account</span>
                <button className="settings-security-button">Delete</button>
            </div>
            <CustomLine />

            <div className="settings-button-selector-container">
                <span className="settings-security-text">
                    Deactivate Account
                </span>
                <button className="settings-security-button">Deactivate</button>
            </div>
        </div>
    );
}
