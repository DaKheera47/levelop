import React from "react";
import Switch from "react-switch";

export default function SliderSwitch({ isChecked, setIsChecked }) {
    return (
        <Switch
            onChange={() => {
                setIsChecked(!isChecked);
            }}
            checked={isChecked}
            onColor="#FA6400"
            offColor="#E6E6E6"
            handleDiameter={13}
            checkedIcon={false}
            uncheckedIcon={false}
            width={40}
            height={20}
        />
    );
}
