import React from "react";
import "./CustomInputField.sass";

export default function CustomInputField({
    label,
    type,
    onChange,
    placeholder,
}) {
    if (!type) {
        let type = "text";
    }

    return (
        <div className="custom-input-container">
            <label className="custom-input-label" htmlFor={label}>
                {label}
            </label>
            <input
                className="custom-input-field"
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                id={label}
            />
        </div>
    );
}
