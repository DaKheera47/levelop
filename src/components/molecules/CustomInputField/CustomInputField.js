import React from "react";
import "./CustomInputField.sass";

export default function CustomInputField({ label }) {
    return (
        <div className="custom-input-container">
            <label className="custom-input-label" htmlFor={label}>
                {label}
            </label>
            <input className="custom-input-field" type="text" id={label} />
        </div>
    );
}
