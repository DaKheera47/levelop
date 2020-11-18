import React from "react";
import { motion } from "framer-motion";
import "./settingsStyle.sass";

export default function Settings() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1>Welcome to the settings page my guy</h1>
        </motion.div>
    );
}
