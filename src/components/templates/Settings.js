import React from "react";
import { motion } from "framer-motion";
import StyleCustomisation from "../molecules/Settings/StyleCustomisation";

import "./settingsStyle.sass";

export default function Settings() {
    return (
        <motion.div className="settings-body" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <StyleCustomisation />
        </motion.div>
    );
}
