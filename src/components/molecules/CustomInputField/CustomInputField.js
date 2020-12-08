import React from "react";
import "./CustomInputField.sass";

export default function CustomInputField({ inputId, label }) {
    return (
        <div className="custom-input-container">
            <label className="custom-input-label" htmlFor={inputId}>{label}</label>
            <input className="custom-input-field" type="text" id={inputId} />
        </div>
    );
}
