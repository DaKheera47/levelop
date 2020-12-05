import React, { useState } from "react";
import { motion } from "framer-motion";
import StyleCustomisation from "../molecules/Settings/StyleCustomisation";
import SliderSelector from "../molecules/SliderSelector/SliderSelector";
import "./settingsStyle.sass";

export default function Settings() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <motion.div
            className="settings-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <StyleCustomisation />
            <SliderSelector
                text="Curated Content"
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />
        </motion.div>
    );
}
