import React, { useState } from "react";
import SliderSelector from "../SliderSelector/SliderSelector";

export default function Notifications() {
    const customHr = (
        <hr
            style={{
                color: "#E9E9E9",
                backgroundColor: "#E9E9E9",
                border: "none",
                height: 1,
            }}
        />
    );

    const [isChecked, setIsChecked] = useState(false);

    return (
        <div>
            <SliderSelector
                text="Curated Content"
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />
            {customHr}
            <SliderSelector
                text="Daily Digest"
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />
            {customHr}
            <SliderSelector
                text="Weekly Digest"
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />
            {customHr}
        </div>
    );
}
