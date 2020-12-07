import React from "react";

export default function ButtonSelector({ text, isActivated, setIsActivated }) {
    return (
        <div className="settings-button-selector-container">
            <span className="settings-button-selector-text">{text}</span>
            <button
                className={
                    isActivated
                        ? "settings-button-selector-button-connected"
                        : "settings-button-selector-button-disconnected"
                }
            >
                {isActivated ? "Remove" : "Connect"}
            </button>
        </div>
    );
}
