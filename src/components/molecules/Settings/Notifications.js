import React, { useState } from "react";
import SliderSelector from "../SliderSelector/SliderSelector";
import CustomLine from "../../atoms/CustomLine";

export default function Notifications() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div>
            <SliderSelector
                text="Curated Content"
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />
            <CustomLine />
            <SliderSelector
                text="Daily Digest"
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />
            <CustomLine />
            <SliderSelector
                text="Weekly Digest"
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />
            <CustomLine />
        </div>
    );
}
