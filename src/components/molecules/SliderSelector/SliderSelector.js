import React from "react";
import SliderSwitch from "../../atoms/SliderSwitch";

export default function SliderSelector({ text, isChecked, setIsChecked }) {
    return (
        <div>
            <label className="settings-slider-selector-container">
                <span className="settings-slider-selector-text">{text}</span>
                <SliderSwitch
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                />
            </label>
        </div>
    );
}
