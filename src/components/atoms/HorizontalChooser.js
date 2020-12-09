import React from "react";

export default function HorizontalChooser({ buttons, buttonName }) {
    return (
        <div className="settings-radio-container">
            {buttons.map((e) => (
                <div className="settings-radio-input" key={e.name}>
                    <input type="radio" name={buttonName} value={e.name} />
                    <label htmlFor={e.name}>{e.name}</label>
                </div>
            ))}
        </div>
    );
}
